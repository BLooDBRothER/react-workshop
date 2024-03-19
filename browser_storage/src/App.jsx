import { useState } from 'react'
import './App.css'
import Sessionstorage from './SessionStorage';
import Localstoarage from './Localstorage';

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
        <h1>Browser Storages</h1>

        <div>
          <label>Input text </label>
          <input value={input} onChange={(e) => {setInput(e.target.value)}} />
          <hr />

          <Localstoarage inputValue={input} />
          <hr />
          <Sessionstorage inputValue={input} />
        </div>
    </div>
  )
}

export default App
