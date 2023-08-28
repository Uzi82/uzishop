import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import userSlice from "./userSlice";
import themeSlice from "./themeSlice";
import likedSlice from "./likedSlice";


const persistCfg = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth: userSlice,
    theme: themeSlice,
    liked: likedSlice
})

const rootPersistedReducer = persistReducer(persistCfg, rootReducer)

const store = configureStore({
    reducer: {
        rootPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch