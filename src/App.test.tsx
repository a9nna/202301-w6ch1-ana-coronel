import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

describe("Given the App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  describe("When is rendered", () => {
    test("Then it should return the text 'To Do list' with heading'", () => {
      const expectedText = "To Do list";

      const text = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
