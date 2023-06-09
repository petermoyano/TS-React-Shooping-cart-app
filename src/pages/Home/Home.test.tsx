import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("Home should render", () => {
    render(<Home />);
    expect(screen.getByText("Ok, what is this site?")).toBeDefined();
});
