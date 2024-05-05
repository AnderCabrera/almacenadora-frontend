import { useEffect, useState } from 'react';
import { Task } from '../components/Task.jsx';
import { getTasks } from '../services/task.service.js';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState('');

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, [inputvalue]);

  return (
    <div className="">
      <h1>Task List</h1>
      <div className="tasks-container w-full flex flex-col items-center">
        <Task tasks={tasks} />
      </div>
    </div>
  );
};
