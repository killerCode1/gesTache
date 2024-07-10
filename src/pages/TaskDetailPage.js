import React, { useContext } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';
import { TaskContext } from '../context/TaskContext';

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((t) => t.id === parseInt(id));

  return (

    <div>
    {task ? (
      <TaskDetail task={task} />
    ) : (
      <p>Task not found</p>
    )}
    <button onClick={() => navigate('/')}>Retour</button>
  </div>

  
  );
};

export default TaskDetailPage;
