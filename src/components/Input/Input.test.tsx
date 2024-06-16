import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("Input Component", () => {
    const setup = (value = 0, onChange = jest.fn()) => {
        const utils = render(<Input value={value} onChange={onChange} />);
        const input = utils.getByRole("input");
        return {
            input,
            ...utils,
        };
    };

    it("renders the input with the correct value", () => {
        const { input } = setup(5);
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(5);
    });

    it("does not allow negative values", () => {
        const handleChange = jest.fn();
        const { input } = setup(5, handleChange);
        fireEvent.change(input, { target: { value: "-1" } });
        expect(input).not.toHaveValue(-1);
        expect(input).toHaveValue(5);
    });
});
