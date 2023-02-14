import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDos } from "./features/toDos";

export const store = configureStore({
  reducer: {
    toDos: toDos.reducer,
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
