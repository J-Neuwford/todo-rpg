import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("verify counter", async () => {
  render(<App />);

  const button = screen.getByText("count is 0");
  button.click();

  await screen.findByText("count is 1");
  expect(screen.getByText("count is 1")).toBeInTheDocument();
});
