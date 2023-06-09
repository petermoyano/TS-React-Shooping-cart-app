import { StoreItem } from "./StoreItem";
import { render, screen } from "@testing-library/react";

describe("StoreItem", () => {
    beforeEach(() => {
        render(<StoreItem id={1} name="test" price={1} imgUrl="test" />);
    });
    test("should render the name of the item", () => {
        expect(screen.getByText("test")).toBeDefined();
    });
});
