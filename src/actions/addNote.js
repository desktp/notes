import firebase from 'firebase';
import { ADD_NOTE } from './types';

export default function addNote(title = '', text = '') {
  return async (dispatch) => {
    const dbRef = firebase.database().ref('/notes');
    await dbRef.push({ title, text });
    dispatch({ type: ADD_NOTE });
  };
}