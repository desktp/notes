import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import InputCard from './components/InputCard';
import NoteCard from './components/NoteCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="input-container">
          <InputCard />
        </div>
        <div className="notes-container">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    );
  }
}

export default App;
