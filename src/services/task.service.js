export const getTasks = async () => {
  let response = await fetch('http://localhost:2880/tasks/getTask');
  let data = await response.json();

  return data;
}

export const addTask = async (task) => {
  let response = await fetch('http://localhost:2880/tasks/addTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token'),
    },
    body: JSON.stringify(task),
  });

  let data = await response.json();

  return data;
}