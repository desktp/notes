import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './InputCard.css';

class InputCard extends Component {
  state = {
    title: '',
    text: '',
    expanded: false,
  }

  expandCard = () => this.setState({ expanded: true });

  handleInputChange = (field, event) => this.setState({ [field]: event.target.value });

  submitNote = () => this.props.addNote(this.state.title, this.state.text);

  render() {
    const { expanded } = this.state;

    return (
      <Paper className="input-note-container">
        <TextField onChange={e => this.handleInputChange('title', e)} value={this.state.title} placeholder="Add note..." onFocus={this.expandCard} />
        {
          expanded && 
            <React.Fragment>
              <TextField onChange={e => this.handleInputChange('text', e)} value={this.state.field} multiline rows={3} />
              <Button variant="contained" color="primary" onClick={() => this.submitNote()}>
                Submit
              </Button>
            </React.Fragment>
        }
      </Paper>

    )
  }
}

InputCard.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default InputCard;