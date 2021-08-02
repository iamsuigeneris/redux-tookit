// import { createSlice } from "@reduxjs/toolkit"

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         userInfo: {
//             name: "lanre",
//             email: "lanre@mail.com"
//         },
//         pending: null,
//         error: false
//     },
//     reducers: {
//         updateStart: (state) => {
//             state.pending = true
//         },
//         updateSuccess: (state, action) => {
//             state.pending = false
//             state.userInfo = action.payload
//         },
//         updateError: (state) => {
//             state.error = true
//             state.pending = false
//         }
//     }
// })

// export const { updateStart, updateSuccess, updateError} = userSlice.actions
// export default userSlice.reducer


                /************************/
                /** createAsyncThunk Method **/
                /************************/

import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
    const res = await axios.post(
        "http://localhost:8800/api/users/1/update",
        user
    )
    return res.data
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "lanre",
            email: "lanre@mail.com"
        },
        pending: null,
        error: false
    },
    reducers: {},
    [updateUser2.pending]: (state) => {
        state.pending = true
        state.error = false
    },
    [updateUser2.fulfilled]: (state, action) => {
        state.pending = false
        state.userInfo = action.payload
    },
    [updateUser2.rejected]: (state) => {
        state.pending = null
        state.error = true
    }
})

export const { updateStart, updateSuccess, updateError } = userSlice.actions
export default userSlice.reducer