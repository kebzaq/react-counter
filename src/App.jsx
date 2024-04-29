import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count < 0 ? "red" : count > 0 ? "green" : "black";
  return (
    <div className="wrapper">
      <header>
        <h1>R: Counter</h1>
      </header>
      <hr />
      <div className="counter">
        <p id="counter" style={{ color }}>
          {count}
        </p>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Descrease
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
