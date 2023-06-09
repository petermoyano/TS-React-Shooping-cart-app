import { render, screen } from "@testing-library/react";
import { Store } from "./Store";

test("Store should render", () => {
    render(<Store />);
    expect(screen.queryByText(/Store/i)).toBeDefined();
});
