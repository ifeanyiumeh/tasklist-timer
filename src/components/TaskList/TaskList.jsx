import { useContext } from "react";
import TaskContext from "../TaskContext/TaskContext";
import "./tasklist.css";

function TaskList(props) {
  const taskContext = useContext(TaskContext);

  const tasks = [...taskContext.tasks];
  // tasks.sort((a, b) => b.id - a.id);

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div>
      <table className="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Task Time in milliseconds</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
