import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerUser } from "../../interface/Reducer";
import { IUser } from "../../interface/User";

const initialState: IReducerUser = {
    user: {},
    isLoggedIn: true,
    phone: ""
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        actionLoginPhone: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoggedIn = true,
            state.phone = action.payload.phone
        },
        actionPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        }
    }
})

export const { actionLoginPhone } = phoneSlice.actions

export default phoneSlice.reducer