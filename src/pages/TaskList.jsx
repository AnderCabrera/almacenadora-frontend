import { useEffect, useRef, useState } from "react";
import { Task } from "../components/Task.jsx";
import { getTasks } from "../services/task.service.js";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState('');
  const node = useRef(null);

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data);
      });
  }, [inputvalue]);

  
  
  return (
    <div>
      <h1>Task List</h1>
      <Task tasks={tasks} />
    </div>
  );
};
