import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loading from "./Loading";

describe("Loading Component", () => {
    it("renders the loading spinner and text", () => {
        render(<Loading />);
        const loadingContainer = screen.getByRole("loading");
        const loadingSpinner = screen.getByRole("loading-spinner");
        const loadingText = screen.getByText("Loading...");

        expect(loadingContainer).toBeInTheDocument();
        expect(loadingSpinner).toBeInTheDocument();
        expect(loadingText).toBeInTheDocument();
    });
});