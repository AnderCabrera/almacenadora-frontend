export const getTasks = async () => {
  let response = await fetch('http://localhost:2880/tasks/getTask');
  let data = await response.json();

  return data;
}