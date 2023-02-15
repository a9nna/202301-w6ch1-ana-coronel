import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDoReducer } from "./features/toDos/toDoSlice";

export const store = configureStore({
  reducer: {
    tasks: toDoReducer,
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
