import { render, screen } from "@testing-library/react";
import ToDos from "./ToDos";

describe("Given ToDos component", () => {
  describe("When is rendered with a list of 1 pending task with the name 'Do laundry'", () => {
    test("Then it shows a card with name 'Do laundry'", () => {
      const pendingTask = [{ id: 1, isDone: false, name: "Do laundry" }];
      const task = "Do laundry";

      render(<ToDos toDos={pendingTask}></ToDos>);
      const expectedResult = screen.getByText(task);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
