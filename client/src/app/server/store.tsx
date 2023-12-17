import { configureStore } from '@reduxjs/toolkit';

import userToolkit from './toolkit/user.toolkit';

export const store = configureStore({
    reducer: {
        user: userToolkit
    }
})
