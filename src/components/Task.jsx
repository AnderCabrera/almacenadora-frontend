import '../output.css'

export const Task = ({ tasks }) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <div className="bg-[#555] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
              {tasks.map((task) => (
                <div key={task._id} className="mb-4">
                  <div className="text-white text-sm font-bold mb-2">
                    {task.task_name}
                  </div>
                  <div className="text-white text-sm font-bold mb-2">
                    {task.task_description}
                  </div>
                  <div className="text-white text-sm font-bold mb-2">
                    {task.date_start.slice(0, 10) + ' ' + task.date_start.slice(11, 19)}
                  </div>
                  <div className="text-white text-sm font-bold mb-2">
                    {task.date_end}
                  </div>
                  <div className="text-white text-sm font-bold mb-2">
                    {task.status ? 'Completed' : 'Pending'}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
