import { useRef, useState } from "react";
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([]);

    // const inputRef = useRef(null);
    // const countRef = useRef(0);

    const handleOnChange = (e) => {
        setInput(e.target.value);
    };

    const addComment = () => {
      setComments(prev => [...prev, input]);
      setInput("");
      // inputRef.current.focus();
    }

    console.log(comments)

    return (
        <div>
            <div>
                <label>Input text </label>
                <input
                    // ref={inputRef}
                    autoFocus
                    value={input}
                    onChange={handleOnChange}
                />

                <button onClick={addComment}>Comment</button>

                <div>
                  {comments.map((comment, idx) => (<div key={idx}>{comment}</div>))}
                </div>
            </div>
        </div>
    );
}

export default App;
