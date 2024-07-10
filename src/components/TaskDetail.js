import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const TaskDetail = ({ task }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h4">Détails de la Tâche</Typography>
      <Typography variant="body1">ID: {task.id}</Typography>
      <Typography variant="body1">Titre: {task.title}</Typography>
      <Typography variant="body1">Description: {task.description}</Typography>
      <Typography variant="body1">Date de début: {task.startDate}</Typography>
      <Typography variant="body1">Statut: {task.status}</Typography>
    </Paper>
  );
};

export default TaskDetail;
