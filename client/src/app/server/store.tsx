import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userToolkit from './toolkit/user.toolkit';

const reducers = combineReducers({
    user: userToolkit
})

const persistedReducer = persistReducer({
    key: `messages-persist`,
    version: 1,
    storage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
