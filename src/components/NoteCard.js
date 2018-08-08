import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import linkifyHtml from 'linkifyjs/html';


import './NoteCard.css';

const NoteCard = ({ note: { title, text} }) => (
  <Paper className="note-card-container" elevation={12}>
    <Typography variant="title" gutterBottom>{title}</Typography>
    <Typography dangerouslySetInnerHTML={{ __html: linkifyHtml(text, { ignoreTags: ['script'] }) }}></Typography>
  </Paper>
);

export default NoteCard;