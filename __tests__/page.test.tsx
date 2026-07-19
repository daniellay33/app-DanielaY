import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Home page renders the getting started heading", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /to get started, edit the page.tsx file/i,
    }),
  ).toBeDefined();
});
