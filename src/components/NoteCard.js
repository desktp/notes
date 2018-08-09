import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import linkifyHtml from 'linkifyjs/html';

import './NoteCard.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const availableColors = ['#D05B41', '#332640', '#B0351A', '#584D62', '#F14823'];

const NoteCard = ({ note: { title, text, key }, deleteNote }) => (
  <Paper className="note-card-container" style={{ backgroundColor: availableColors[getRandomInt(availableColors.length)] }} elevation={12}>
    <Typography variant="title" gutterBottom>{title}</Typography>
    <Typography dangerouslySetInnerHTML={{ __html: linkifyHtml(text, { ignoreTags: ['script'] }) }}></Typography>
    <IconButton onClick={() => deleteNote(key)}><Icon>close</Icon></IconButton>
  </Paper>
);

export default NoteCard;