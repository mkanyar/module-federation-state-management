import React from "react";
import ReactDOM from "react-dom";
import Host from "./host";

import { StoreProvider } from "store/store";

const App = () => {
    return <Host />;
};
ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("app")
);
export default App;
