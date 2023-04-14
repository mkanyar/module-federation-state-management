import React from "react";
import Header from "nav/Header";
import { useStore } from "store/store";

const Host = () => {
    const { count, increment } = useStore();
    return (
        <div data-testid="app">
            <Header />
            <div>Name: host</div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increment}>Add To Cart</button>
            </div>
        </div>
    );
};
export default Host;
