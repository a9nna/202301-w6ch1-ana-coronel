import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoTask } from "../../../types";

const initialtoDos: ToDoTask[] = [];

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialtoDos,
  reducers: {
    loadApi: (currentTask, action: PayloadAction<ToDoTask[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadApi: loadApiActionCreator } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
