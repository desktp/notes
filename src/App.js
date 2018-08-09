import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NotesBoard from './components/NotesBoard';

import NotesReducer from './reducers/NotesReducer';

import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './config';

import './App.css';

class App extends Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      firebase.initializeApp({ apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId });
    }

    this.store = createStore(
      NotesReducer,
      applyMiddleware(thunk)
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <NotesBoard />
      </Provider>
    );
  }
}

export default App;
