import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        "https://api.github.com/users/Lakshmikant-2001"
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div id="app">
      <div>
        <strong>Name:</strong> {userData.login}
      </div>
      <div>
        <strong>Bio:</strong> {userData.bio}
      </div>
    </div>
  );
}

export default App;
