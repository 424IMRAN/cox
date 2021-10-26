import { render } from "@testing-library/react";
import { ChangeEvent } from "react";
import TablePaginationDemo from './index'
import React from "react";

describe("Pagination Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <TablePaginationDemo  />
    );
    expect(container).toMatchSnapshot();
  });

  it("Pagination in the document", () => {
    const { container } = render(
      <TablePaginationDemo />
    );
    expect(container).toBeInTheDocument();
  });
});