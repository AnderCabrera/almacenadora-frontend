import { useEffect, useRef, useState } from "react";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState('');
  const node = useRef(null);

  // console.log(node.current);

  useEffect(() => {
    
    console.log(inputvalue);
  }, []);
  
  return (
    <div>
      <h1>Task List</h1>
      <input type="text" ref={node} onChange={(e) => {
        setInputValue(e.target.value);
      }}/>
    </div>
  );
};
