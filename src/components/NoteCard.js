import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import './NoteCard.css';

class InputCard extends Component {
  state = {
    title: '',
    text: '',
    expanded: false,
  }

  expandCard = () => this.setState({ expanded: true });

  render() {
    const { expanded } = this.state;

    return (
      <Paper className="note-card-container" elevation={6}>
        <Typography variant="title">Note title</Typography>
        <Typography variant="body2">
          {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
        </Typography>
      </Paper>

    )
  }
}

export default InputCard;