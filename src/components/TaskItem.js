import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className={`task-item ${task.priority.toLowerCase()}`}>
      <h4>{task.title}</h4>
      <p>Priority: {task.priority}</p>
      <p>Deadline: {task.deadline}</p>
    </div>
  );
}

export default TaskItem;
