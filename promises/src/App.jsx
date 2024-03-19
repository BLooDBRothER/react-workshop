import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [promiseState, setPromiseState] = useState("pending");

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("Promise resolved");
        reject(new Error("Promise rejected"));
      }, 3000);
    });
  };

  useEffect(() => {
    fetchData()
      .then((result) => {
        setPromiseState("resolved");
        console.log(result);
      })
      .catch((error) => {
        setPromiseState("rejected");
        console.log(error.message);
      });
  }, []);

  return <h1>{promiseState}</h1>;
}

export default App;
