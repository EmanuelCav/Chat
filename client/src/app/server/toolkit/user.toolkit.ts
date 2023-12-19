import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerUser } from "../../interface/Reducer";
import { IUser, IUserInfo } from "../../interface/User";

const initialState: IReducerUser = {
    user: {},
    isLoggedIn: false
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        actionLoginPhone: (state, action: PayloadAction<IUser>) => {
            state.user.user = action.payload
        },
        actionLogin: (state, action: PayloadAction<IUserInfo>) => {
            state.user = action.payload
            state.isLoggedIn = true
        }
    }
})

export const { actionLoginPhone, actionLogin } = phoneSlice.actions

export default phoneSlice.reducer