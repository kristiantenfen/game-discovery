import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from ".";

const onChange = jest.fn();

describe("Pagination component", () => {
  it("renders a heading", () => {
    render(<Pagination onChange={onChange} />);

    const heading = screen.getByTestId("pagination-component");

    expect(heading).toBeInTheDocument();
  });
});
