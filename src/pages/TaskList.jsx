import { useEffect, useState } from 'react';
import { Task } from '../components/Task.jsx';
import { TaskForm } from '../components/TaskForm.jsx';
import { getTasks, getTask, deleteTask } from '../services/task.service.js';
import { UpdateModal } from '../components/UpdateModal.jsx';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import withReactContent from 'sweetalert2-react-content';
import '../output.css'; 

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});
  const ReactSwal = withReactContent(Swal);

  
  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  const handleTaskAdded = () => {
    getTasks().then((data) => {
      setTasks(data);
    });

    ReactSwal.fire({
      title: 'Success',
      text: 'Task added successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleTaskUpdated = (e) => {
    const taskId = e.target.closest('tr').id;
    
    getTask(taskId).then((data) => {
      setTask(data);
      setShowModal(true);
    });
  };

  const handleTaskDeleted = (e) => {
    const taskId = e.target.closest('tr').id;
    
    deleteTask(taskId).then((data) => {
      if (data) {
        getTasks().then((data) => {
          setTasks(data);
        });

        ReactSwal.fire({
          title: 'Success',
          text: 'Task deleted successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalUpdate = () => {
    getTasks().then((data) => {
      setTasks(data);
    });

    ReactSwal.fire({
      title: 'Success',
      text: 'Task updated successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  

  return (
    <div className="bg-[#111]">
      <h1>Task List</h1>
      <div className="task-form-container w-full flex flex-col items-center">
        <TaskForm onTaskAdded={handleTaskAdded} />
      </div>
      <div className="tasks-container w-full flex flex-col items-center">
        <Task
          tasks={tasks}
          updateHandler={handleTaskUpdated}
          deleteHandler={handleTaskDeleted}
        />
      </div>
      {showModal && (
        <UpdateModal
          task={task}
          onClose={handleModalClose}
          onUpdate={handleModalUpdate}
        />
      )}
    </div>
  );
};
