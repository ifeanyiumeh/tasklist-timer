import React, { useState, createContext } from "react";
import ControlButtons from "./components/ControlButtons";

import "./App.css";
import Clock from "./components/Clock";
import TaskList from "./components/TaskList";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        className="taskName"
        placeholder="Type in your class name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Clock name={name} />

      <br />

      <TaskList />
    </div>
  );
}

export default App;

/* <div>
        <input
          type="Text"
          className="taskName"
          placeholder="Type in your class name here"
        />
      </div>
      <br />
      <input type="text" placeholder="0" id="time" disabled />
      <br /> */
