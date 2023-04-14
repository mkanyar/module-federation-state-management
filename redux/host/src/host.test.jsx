import React from "react";
import { render, screen } from "@testing-library/react";
import Host from "./host";

// jest.mock(
//     "nav/Header",
//     () => {
//         return () => <div>header</div>;
//     },
//     { virtual: true }
// );
jest.mock(
    "store/store",
    () => {
        return {
            useStore: () => {
                return { count: 2, increment: jest.fn(), clear: jest.fn() };
            },
        };
    },
    { virtual: true }
);

describe("APP", () => {
    it("App", () => {
        render(<Host />);
        const app = screen.getByTestId("app");
        screen.getByText("header");
        expect(app).toBeDefined();
    });
});
