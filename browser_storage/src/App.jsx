import { useState } from "react";
import "./App.css";
import Sessionstorage from "./SessionStorage";
import Localstoarage from "./LocalStorage";

function App() {
    const [input, setInput] = useState("");

    const handleOnChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h1>Browser Storages</h1>
            <div>
                <label>Input text </label>
                <input
                    autoFocus
                    value={input}
                    onChange={handleOnChange}
                />
                <hr />

                <Localstoarage inputValue={input} />
                <hr />
                <Sessionstorage inputValue={input} />
            </div>
        </div>
    );
}

export default App;
