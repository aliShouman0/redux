import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations:reservationSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;