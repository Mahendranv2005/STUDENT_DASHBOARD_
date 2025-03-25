import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode?"container dark":"container"}>
    <h1><b>Welcome to Student Dashboard!</b></h1>
    <input type="text" 
    placeholder="Enter your Name" 
    className="name-input" 
    value={name} 
    onChange={(e) => setname(e.target.value)}
    ></input>
    <p>Hello, <b> {name} 👋!</b></p>
    <button 
                className="toggle-btn" 
                onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button> 
    </div>
  );
}

export default App;
