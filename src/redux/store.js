import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './sliceContact';
import { filterSlice } from './sliceFilter';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'item',
  storage,
  blacklist: ['filter'],
};

const persistedClickReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: {
    item: persistedClickReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
