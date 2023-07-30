import { configureStore } from "@reduxjs/toolkit";
import userReducer from "src/store/user/slice";
import tripReducer from "src/store/trips/slice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    trips: tripReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
