// src/App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const appendInput = (e) => {
    setInput(input + e.target.innerText);
  }

  const clearInput = () => {
    setInput("");
  }

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
      <div className="input">{input}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={clearInput} className="btn btn-ac">AC</button>
        </div>
          <div className="grid-container">
            <button onClick={appendInput}>7</button>
            <button onClick={appendInput}>8</button>
            <button onClick={appendInput}>9</button>
            <button className="operator" onClick={appendInput}>
              /
            </button>
            <button onClick={appendInput}>4</button>
            <button onClick={appendInput}>5</button>
            <button onClick={appendInput}>6</button>
            <button className="operator" onClick={appendInput}>
              *
            </button>
            <button onClick={appendInput}>1</button>
            <button onClick={appendInput}>2</button>
            <button onClick={appendInput}>3</button>
            <button className="operator" onClick={appendInput}>
              -
            </button>
            <button onClick={appendInput}>0</button>
            <button onClick={appendInput}>.</button>
            <button className="operator" onClick={calculate}>
              =
            </button>
            <button className="operator" onClick={appendInput}>
              +
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
