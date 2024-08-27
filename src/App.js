import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={addTask} style={{ padding: '10px' }}>Add Task</button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {task}
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
