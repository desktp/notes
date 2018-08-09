import firebase from 'firebase';
import { DELETE_NOTE } from './types';

export default function deleteNote(noteKey) {
  return async (dispatch) => {
    const dbRef = firebase.database().ref(`/notes/${noteKey}`);
    await dbRef.remove();
    dispatch({ type: DELETE_NOTE });
  };
}