import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './InputCard.css';

const INITIAL_STATE = {
  title: '',
  text: '',
  expanded: false,
}

class InputCard extends Component {
  state = INITIAL_STATE;

  expandCard = () => this.setState({ expanded: true });

  handleInputChange = (field, event) => this.setState({ [field]: event.target.value });

  onBlur = () => !this.state.text && !this.state.title ? this.setState({ expanded: false }) : null;

  submitNote = () => {
    this.props.addNote(this.state.title, this.state.text);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { expanded } = this.state;

    return (
      <Paper className="input-note-container">
        <TextField onChange={e => this.handleInputChange('title', e)} onBlur={this.onBlur} value={this.state.title} placeholder="Add note..." onFocus={this.expandCard} />
        {
          expanded && 
            <React.Fragment>
              <TextField onChange={e => this.handleInputChange('text', e)} onBlur={this.onBlur} value={this.state.field} multiline rows={3} />
              <Button onClick={() => this.submitNote()}>
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