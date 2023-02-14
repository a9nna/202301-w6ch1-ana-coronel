import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoTask } from "../../components/types";

const initialtoDos: ToDoTask[] = [
  { id: 1, isDone: false, name: "Do laundry" },
  { id: 2, isDone: false, name: "Do homework" },
  { id: 2, isDone: true, name: "Code a little" },
];

export const toDos = createSlice({
  name: "toDo",
  initialState: initialtoDos,
  reducers: {
    loadApi(currentState, action: PayloadAction<ToDoTask[]>) {
      const apiData = action.payload;
      return apiData;
    },
  },
});

export const { loadApi: loadApiActionCreator } = toDos.actions;
export default toDos.reducer;
