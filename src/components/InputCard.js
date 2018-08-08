import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './InputCard.css';

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
      <Paper className="input-note-container">
        <TextField placeholder="Add note..." onFocus={this.expandCard} />
        {expanded && <TextField multiline rows={3} />}
      </Paper>

    )
  }
}

export default InputCard;