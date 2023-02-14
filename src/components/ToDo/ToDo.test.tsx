import { render, screen } from "@testing-library/react";
import ToDo from "./ToDo";

describe("Given ToDo component", () => {
  describe("When is rendered with a list of 1 pending task with the name 'Do laundry'", () => {
    test("Then it shows 'Do laundry'", () => {
      const pendingTask = [{ id: 1, isDone: false, name: "Do laundry" }];
      const task = "Do laundry";

      render(<ToDo toDo={pendingTask}></ToDo>);
      const expectedResult = screen.getByText(task);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
