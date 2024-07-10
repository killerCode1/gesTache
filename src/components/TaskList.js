import React from 'react';
import { Link } from 'react-router-dom';
//import { List, ListItem, ListItemText, Button, Paper } from '@mui/material';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
} from '@mui/material';

/** 
const TaskList = ({ tasks }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <h2>Liste des Tâches</h2>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={`${task.startDate} - ${task.status}`} />
            <Button variant="contained" color="primary" component={Link} to={`/task/${task.id}`}>
              Voir Détail
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
*/

const TaskList = ({ tasks }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <h2>Liste des Tâches</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Titre</TableCell>
            <TableCell align="left">Date de début</TableCell>
            <TableCell align="left">Statut</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell align="left">{task.title}</TableCell>
              <TableCell align="left">{task.startDate}</TableCell>
              <TableCell align="left">{task.status}</TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/task/${task.id}`}
                >
                  Voir Détail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TaskList;
