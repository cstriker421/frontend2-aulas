import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

test("toggles status when button is clicked", () => {
  render(<Toggle />);

  expect(screen.getByText("Status: OFF")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Toggle"));
  expect(screen.getByText("Status: ON")).toBeInTheDocument();
});
