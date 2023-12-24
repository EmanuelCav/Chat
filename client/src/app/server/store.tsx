import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userToolkit from './toolkit/user.toolkit';

import { key } from '../config/config';

const reducers = combineReducers({
    user: userToolkit
})

const persistedReducer = persistReducer({
    key: `${key}`,
    version: 1,
    storage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.DEV,
    middleware: [thunk]
})
