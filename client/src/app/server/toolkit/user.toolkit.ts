import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerUser } from "../../interface/Reducer";
import { IUser } from "../../interface/User";

const initialState: IReducerUser = {
    user: {}
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        actionLoginPhone: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    }
})

export const { actionLoginPhone } = phoneSlice.actions

export default phoneSlice.reducer