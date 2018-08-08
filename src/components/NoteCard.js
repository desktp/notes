import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import './NoteCard.css';

const NoteCard = ({ note: { title, text} }) => (
  <Paper className="note-card-container" elevation={6}>
    <Typography variant="title">{title}</Typography>
    <Typography variant="body2">
      {text}
    </Typography>
  </Paper>

);

export default NoteCard;