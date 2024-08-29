import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, deadline, priority, category: 'To Do' };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Task Description" 
      />
      <input 
        type="date" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
        required 
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)} 
        required
      >
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
