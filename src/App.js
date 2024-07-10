import React from 'react';
import { TaskProvider } from './context/TaskContext';
import RoutesComponent from './routes';

function App() {
  return (
    <TaskProvider>
      <RoutesComponent />
    </TaskProvider>
  );
}

export default App;
