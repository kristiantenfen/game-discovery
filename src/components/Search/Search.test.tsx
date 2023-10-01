import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from ".";

describe("Search component", () => {
  it("renders a heading", () => {
    render(<Search />);

    const heading = screen.getByTestId("search-input");

    expect(heading).toBeInTheDocument();
  });
});
