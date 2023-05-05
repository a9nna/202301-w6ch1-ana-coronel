import { createAction } from "@reduxjs/toolkit";
import { ToDoTask } from "../types";

export const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

export const apiData: ToDoTask[] = [
  { id: 1, name: "", isDone: true },
  { id: 1, name: "", isDone: false },
];

export const mockAction = createAction<ToDoTask[]>("toDo/loadApi");
