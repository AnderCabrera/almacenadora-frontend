/* eslint-disable react/prop-types */
import { useState } from 'react';
import { updateTask } from '../services/task.service.js';

export const UpdateModal = ({ task, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    taskName: task.task_name,
    taskDescription: task.task_description,
    dateStart: new Date(task.date_start).toISOString().split('T')[0],
    dateEnd: new Date(task.date_end).toISOString().split('T')[0],
    taskStatus: task.task_status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask(task._id, {
      task_name: formData.taskName,
      task_description: formData.taskDescription,
      date_start: new Date(formData.dateStart),
      date_end: new Date(formData.dateEnd),
      task_status: formData.taskStatus,
    }).then(() => {
      onUpdate();
      onClose();
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-[#222] p-8 rounded-lg w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Task Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              name="taskName"
              type="text"
              value={formData.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Task Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              name="taskDescription"
              type="text"
              value={formData.taskDescription}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Date Start
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              name="dateStart"
              type="date"
              value={formData.dateStart}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Date End
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              name="dateEnd"
              type="date"
              value={formData.dateEnd}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Task Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              name="taskStatus"
              value={formData.taskStatus}
              onChange={handleChange}
            >
              <option value="true">Completed</option>
              <option value="false">Incomplete</option>
            </select>
          </div>
          <div className="flex justify-center w-full gap-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
              type="submit"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
