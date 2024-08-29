import React from 'react';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="tasks-container">
        <TaskList title="To Do" status="todo" />
        <TaskList title="On Progress" status="inProgress" />
        <TaskList title="Done" status="done" />
      </div>
    </div>
  );
}

export default App;
