import { useEffect, useState } from 'react'

const Sessionstorage = ({ inputValue }) => {
    const [sessionstorageValue, setSessionstorageValue] = useState("No Value");

    const updateSessionstorageValue = () => {
        inputValue && window.sessionStorage.setItem("react", inputValue);
    }

    const getSessionstorageValue = () => {
        const value = window.sessionStorage.getItem("react")
        value && setSessionstorageValue(value);
    }

    // useEffect(() => {
    //     getLocalstorageValue();
    // }, [])

    return (
        <div>
            <h2>Session Storage</h2>
            <h3>Value: {sessionstorageValue}</h3>
            <button onClick={getSessionstorageValue}>Get</button>
            <button onClick={updateSessionstorageValue}>Set</button>
        </div>
  )
}

export default Sessionstorage
