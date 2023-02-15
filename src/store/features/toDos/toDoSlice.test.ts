import { ToDoTask } from "../../../types";
import { loadApiActionCreator, toDoReducer } from "./toDoSlice";

describe("Given a toDoReducer function", () => {
  describe("When it receives a list with 2 tasks and the a load list action", () => {
    test("Then it should return the received list", () => {
      const initialList: ToDoTask[] = [];
      const expectedNewList: ToDoTask[] = [
        { id: 1, isDone: false, name: "Do laundry" },
        { id: 2, isDone: false, name: "Take a nap" },
      ];

      const newList = toDoReducer(
        initialList,
        loadApiActionCreator(expectedNewList)
      );

      expect(newList).toStrictEqual(expectedNewList);
    });
  });
});
