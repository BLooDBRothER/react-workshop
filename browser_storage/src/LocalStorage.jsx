import { useEffect, useState } from 'react'

const Localstoarage = ({ inputValue }) => {
    const [localstorageValue, setLocalstorageValue] = useState("No Value");

    const updateLocalstorageValue = () => {
        inputValue && window.localStorage.setItem("react", inputValue);
    }

    const getLocalstorageValue = () => {
        const value = window.localStorage.getItem("react")
        value && setLocalstorageValue(value);
    }

    useEffect(() => {
        getLocalstorageValue();
    }, [])

    return (
        <div>
            <h2>Local Storage</h2>
            <h3>Value: {localstorageValue}</h3>
            <button onClick={getLocalstorageValue}>Get</button>
            <button onClick={updateLocalstorageValue}>Set</button>
        </div>
  )
}

export default Localstoarage
