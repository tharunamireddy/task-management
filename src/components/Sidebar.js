import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div className="sidebar-item">
        <h4>Expired Tasks</h4>
        <p>5</p>
      </div>
      <div className="sidebar-item">
        <h4>All Active Tasks</h4>
        <p>7</p>
      </div>
      <div className="sidebar-item">
        <h4>Completed Tasks</h4>
        <p>2/7</p>
      </div>
      <button className="add-task">+ Add Task</button>
    </div>
  );
}

export default Sidebar;
