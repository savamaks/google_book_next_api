
import { configureStore } from "@reduxjs/toolkit";
import {  TypedUseSelectorHook, useSelector } from "react-redux";
import reducer from './slice'
import { combineReducers } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

// <reference types="redux-persist" />

const persistConfig = {
    key: 'root', //Название ключа в localStorage
	storage,
}


const rootReducer = combineReducers({ reducer})

const persistedReducer = persistReducer(persistConfig, rootReducer);



 const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST , PURGE, REGISTER]
        },
    })
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store