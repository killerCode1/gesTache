import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';


//import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));


const TaskPage = () => {
  const { tasks, addTask } = useContext(TaskContext);

  return (

    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div> 
  );
};

export default TaskPage;




