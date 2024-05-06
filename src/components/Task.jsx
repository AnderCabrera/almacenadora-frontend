/* eslint-disable react/prop-types */
import '../output.css';

export const Task = ({ tasks, updateHandler, deleteHandler }) => {
  return (
    <>
      <table className="table-auto w-[80%] justify-center border ">
        <thead className="">
          <tr className="bg-slate-900">
            <th className="border border-solid border-white text-white">
              Task Name
            </th>
            <th className="border border-solid border-white text-white">
              Task Description
            </th>
            <th className="border border-solid border-white text-white">
              Date Start
            </th>
            <th className="border border-solid border-white text-white">
              Date End
            </th>
            <th className="border border-solid border-white text-white">
              Task Status
            </th>
            <th className="border border-solid border-white text-white">
              User
            </th>
            <th className="border border-solid border-white text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className="even:bg-gray-200 odd:bg-white text-center"
              id={task._id}
            >
              <td>{task.task_name}</td>
              <td>{task.task_description}</td>
              <td>{new Date(task.date_start).toLocaleString()}</td>
              <td>{new Date(task.date_end).toLocaleString()}</td>
              <td>
                {task.task_status ? (
                  <span className="text-green-600">Completed</span>
                ) : (
                  <span className="text-red-600">Incomplete</span>
                )}
              </td>
              <td>{task.user.name}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded m-1"
                  onClick={updateHandler}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded m-1"
                  onClick={deleteHandler}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
