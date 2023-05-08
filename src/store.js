import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gymApi } from "./redux/services/apiFetching";

export const store = configureStore({
  reducer: {
    [gymApi.reducerPath]: gymApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gymApi.middleware),
});

setupListeners(store.dispatch);
