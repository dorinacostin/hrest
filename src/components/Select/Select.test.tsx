import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from "./Select";
import { CurrencyOptionType, SelectType } from "./type";

describe("Select Component", () => {
    const options: CurrencyOptionType[] = [
        { currency: "USD", rate: 1.0784, symbol: "$" },
        { currency: "EUR", rate: 1, symbol: "€" },
        { currency: "JPY", rate: 169.58, symbol: "¥" },
    ];

    const props: SelectType = {
        disabled: false,
        value: options[0].rate,
        onChange: jest.fn(),
        options,
    };

    it("renders the select element with the correct options", () => {
        render(<Select {...props} />);
        const selectElement = screen.getByRole("select");
        expect(selectElement).toBeInTheDocument();

        options.forEach(option => {
            expect(screen.getByText(option.currency)).toBeInTheDocument();
        });
    });

    it("renders the select element with the correct default value", () => {
        render(<Select {...props} />);
        const selectElement = screen.getByRole("select");
        expect(selectElement).toHaveValue(props.value.toString());
    });

    it("calls onChange handler when value is changed", () => {
        render(<Select {...props} />);
        const selectElement = screen.getByRole("select");

        fireEvent.change(selectElement, { target: { value: options[1].rate.toString() } });

        expect(props.onChange).toHaveBeenCalled();
        expect(selectElement).toHaveValue(props.value.toString());
    });

    it("renders the select element as disabled when disabled prop is true", () => {
        const disabledProps = { ...props, disabled: true };
        render(<Select {...disabledProps} />);
        const selectElement = screen.getByRole("select");
        expect(selectElement).toBeDisabled();
    });
});
