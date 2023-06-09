import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
    test("App should be defined", () => {
        expect(App).toBeDefined();
    });
});
