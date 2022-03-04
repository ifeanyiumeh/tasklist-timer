import { useContext } from "react";
import TaskContext from "./TaskContext";

function TaskList(props) {
  const taskContext = useContext(TaskContext);

  const tasks = [...taskContext.tasks];
  // tasks.sort((a, b) => b.id - a.id);

  if (tasks.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>time</th>
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
  );
}

export default TaskList;
