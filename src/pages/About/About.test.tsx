import { render, screen } from "@testing-library/react";
import { About } from "./About";

test("About should render", () => {
    render(<About />);
    expect(
        screen.getByText("I'm Pedro Moyano, React-Node developer at Solvd Inc.")
    ).toBeDefined();
});
