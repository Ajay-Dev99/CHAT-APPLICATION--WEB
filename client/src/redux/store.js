import { configureStore } from '@reduxjs/toolkit'
import selectedChatReducer from './features/selectedChat/selectedUser'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'selecteduser',
    storage,
}


const persistedReducer = persistReducer(persistConfig, selectedChatReducer)

export const store = configureStore({
    reducer: {
        selecteduser: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export const persistor = persistStore(store)