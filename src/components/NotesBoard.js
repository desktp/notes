import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputCard from './InputCard';
import NoteCard from './NoteCard';

import addNote from '../actions/addNote';
import deleteNote from '../actions/deleteNote';
import initNoteListener from '../actions/initNoteListener';

class NotesBoard extends Component {
  componentWillMount() {
    this.props.initNoteListener();
  }

  renderNotes() {
    const { notes, deleteNote } = this.props;
    return notes.map(note => <NoteCard key={note.key} note={note} deleteNote={deleteNote} />);
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

const mapDispatchToProps = { addNote, deleteNote, initNoteListener };

export default connect(mapStateToProps, mapDispatchToProps)(NotesBoard);
