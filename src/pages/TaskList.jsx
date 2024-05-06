import { useEffect, useState } from 'react';
import { Task } from '../components/Task.jsx';
import { TaskForm } from '../components/TaskForm.jsx';
import { getTasks } from '../services/task.service.js';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data); 
    });
  }, []);

  const handleTaskAdded = () => {
    getTasks().then((data) => {
      setTasks(data);
    });
  };

  return (
    <div className="">
      <h1>Task List</h1>
      <div className="task-form-container w-full flex flex-col items-center">
        <TaskForm onTaskAdded={handleTaskAdded} />
      </div>
      <div className="tasks-container w-full flex flex-col items-center">
        <Task tasks={tasks} />
      </div>
    </div>
  );
};
