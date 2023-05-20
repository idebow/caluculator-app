// src/App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const handleClear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(
        String(eval(input)).length > 3 &&
          String(eval(input)).includes(".")
          ? String(eval(input).toFixed(4))
          : String(eval(input))
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="input" data-testid="calc-result">{input}</div>
      <div className="buttons">
        <div className="operators">
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
        <div className="digits">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map((num) => (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button onClick={handleClear}>Clear</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
