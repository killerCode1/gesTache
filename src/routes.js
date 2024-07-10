import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import TaskDetailPage from './pages/TaskDetailPage';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
