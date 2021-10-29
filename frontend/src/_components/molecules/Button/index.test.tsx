import {fireEvent, render, screen} from "@testing-library/react";
import ButtonComponent from "./index";

describe("Button Component", () => {

  const onClick=jest.fn();

    test("Matches Snapshot", () => {
        const { asFragment } = render(<ButtonComponent  onClick={onClick} children="Button" startIcon="add" endIcon="add"/>);
        expect(asFragment.name).toMatchSnapshot()
    });

    it("should get button text", () => {
        render(<ButtonComponent onClick={onClick} children="Button" startIcon="add" endIcon="add"/>); 
        expect(
          screen.getByText(/Button/)
        ).toBeInTheDocument();
      });

      it("should call onclick",()=>{
        const { getByText } = render(<ButtonComponent  onClick={onClick} children="Button" startIcon="add" endIcon="add"/>);
        fireEvent.click(getByText(/Button/i));
        expect(onClick).toHaveBeenCalled();
    });

});