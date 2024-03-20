import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const incrementNoCallback = () => {
        for (let i = 0; i < 100; i++) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={handleIncrement()}>Increment</button>
            <button onClick={handleDecrement()}>Decrement</button>

            <button onClick={incrementNoCallback()}>
                - Increment 100 times
            </button>
        </div>
    );
}

export default Counter;
