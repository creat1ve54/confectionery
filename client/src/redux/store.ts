import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";
import cardsSlice from "./cards/cardsSlice";

export const store = configureStore({
  reducer: {
    adminSlice,
    cardsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
