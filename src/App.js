import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NotesBoard from './components/NotesBoard';

import addNote from './actions/addNote';

import NotesReducer from './reducers/NotesReducer';

import './App.css';

const config = {
  apiKey: "AIzaSyB68ZtlaYFXb7ljdaCJ9Mvt9er6CKocawQ",
  authDomain: "notes-board-dd5b0.firebaseapp.com",
  databaseURL: "https://notes-board-dd5b0.firebaseio.com",
  projectId: "notes-board-dd5b0",
  storageBucket: "notes-board-dd5b0.appspot.com",
  messagingSenderId: "247216014902"
};

class App extends Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    // Note: this API requires redux@>=3.1.0
    this.store = createStore(
      NotesReducer,
      applyMiddleware(thunk)
    );
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={this.store}>
        <NotesBoard />
      </Provider>
    );
  }
}

const mapDispatchToProps = { addNote };

export default App;
