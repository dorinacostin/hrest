import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { useApiXML } from "../../hooks/useApiXML";

jest.mock("../../hooks/useApiXML");

const mockUseApiXML = useApiXML as jest.MockedFunction<typeof useApiXML>;

describe("App Component", () => {
    beforeEach(() => {
        mockUseApiXML.mockReturnValue({
            rates: [
                { currency: "USD", rate: 1.0784, symbol: "$" },
                { currency: "JPY", rate: 169.58, symbol: "¥" },
                { currency: "EUR", rate: 1, symbol: "€" }
            ],
            loading: false,
            error: null
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders the loading component when loading", () => {
        mockUseApiXML.mockReturnValueOnce({ rates: [], loading: true, error: null });
        render(<App />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders the converter when loading is complete", () => {
        render(<App />);
        expect(screen.getByText("Currency Converter")).toBeInTheDocument();
    });

    it("updates the toCurrency when fromCurrency changes", async () => {
        render(<App />);
        const selectTo = screen.getByDisplayValue("1.0784");

        fireEvent.change(selectTo, { target: { value: "169.58" } });

        await waitFor(() => {
            expect(selectTo).toHaveValue(169.58);
        });
    });
});
