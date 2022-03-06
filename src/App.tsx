import React, { useState } from "react";

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
        placeholder="Insert your task name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Clock name={name} />

      <TaskList />
    </div>
  );
}

export default App;
