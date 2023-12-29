import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerUser } from "../../interface/Reducer";
import { IContact, IUser, IUserInfo } from "../../interface/User";

const initialState: IReducerUser = {
    user: {},
    contact: {},
    isLoggedIn: false
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<IUser>) => {
            state.user.user = action.payload
        },
        actionLogin: (state, action: PayloadAction<IUserInfo>) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        getContactChat: (state, action: PayloadAction<IContact>) => {
            state.contact = action.payload
        }
    }
})

export const { updateUser, actionLogin, getContactChat } = phoneSlice.actions

export default phoneSlice.reducer