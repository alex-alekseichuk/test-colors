import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query/react';

import colorsReducer from '../features/colors/colorsSlice';
// import {colorsApi} from "../services/colors";

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    // [colorsApi.reducerPath]: colorsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(colorsApi.middleware),
});

// setupListeners(store.dispatch);
