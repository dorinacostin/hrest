import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";
import { CardType } from "./type";

describe("Card Component", () => {
    const props: CardType = {
        title: "Card Title",
        subtitle: "Card Subtitle",
        children: <div>Card Children Content</div>,
    };

    it("renders the title and subtitle", () => {
        render(<Card {...props} />);
        const titleElement = screen.getByText("Card Title");
        const subtitleElement = screen.getByText("Card Subtitle");

        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });

    it("renders the children content", () => {
        render(<Card {...props} />);
        const childrenElement = screen.getByText("Card Children Content");

        expect(childrenElement).toBeInTheDocument();
    });
});
