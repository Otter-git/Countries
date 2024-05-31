import axios from "axios";
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const reducers = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countryReducer,
  details: detailsReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      },
    },
    serializableCheck: false,
  })
});

export const persistor = persistStore(store);