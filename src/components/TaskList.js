import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ title, status }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/tasks');
        const data = await response.json();
        setTasks(data.filter(task => task.status === status));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [status]);

  return (
    <div className="task-list">
      <h3>{title}</h3>
      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks in this category</p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
