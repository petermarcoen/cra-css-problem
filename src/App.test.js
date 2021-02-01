import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

it("renders", async () => {
  render(<App />);

  // Succeeds
  expect(await screen.findByRole("button", { name: /Secret button/ }));
});
