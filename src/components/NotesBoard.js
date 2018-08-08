import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import InputCard from './InputCard';
import NoteCard from './NoteCard';

import addNote from '../actions/addNote';
import initNoteListener from '../actions/initNoteListener';

class NotesBoard extends Component {
  componentWillMount() {
    this.props.initNoteListener();
  }

  renderNotes() {
    const { notes } = this.props;

    return notes.map(note => <NoteCard key={note.key} note={note} />);
  }

  render() {
    return (
      <div className="content">
        <div className="input-container">
          <InputCard addNote={this.props.addNote} />
        </div>
        <div className="notes-container">
          {this.renderNotes()}
        </div>
        <div className="content-background" />
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const mapDispatchToProps = { addNote, initNoteListener };

export default connect(mapStateToProps, mapDispatchToProps)(NotesBoard);
