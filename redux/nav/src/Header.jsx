import React from "react";

import { useStore } from "store/store";

export default () => {
    const { count, clear } = useStore();
    return (
        <header>
            <div>Awesome Header</div>
            <div>
                {count}

                <button onClick={clear}>normal component for test</button>
            </div>
        </header>
    );
};
