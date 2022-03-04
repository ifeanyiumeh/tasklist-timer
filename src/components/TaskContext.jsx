import React, { useState, useEffect } from "react";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
});

let id = 0;
export function TaskContextProvider(props) {
  // const [currId, setCurrId] = useState(0);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (name, time) => {
    if (time === 0) {
      return;
    }

    setTask((prevTask) => {
      return [
        ...prevTask,
        {
          name,
          time,
          id,
        },
      ];
    });
    id += 1;
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
