import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders welcome message with user name", () => {
  render(<Welcome user="Maria" />);
  expect(screen.getByText("Welcome, Maria")).toBeInTheDocument();
});
