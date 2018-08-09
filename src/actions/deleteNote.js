import firebase from 'firebase';
import { DELETE_NOTE } from './types';

export default function deleteNote(noteKey) {
  return async (dispatch) => {
    console.log('deleting note', noteKey);
    const dbRef = firebase.database().ref(`/notes/${noteKey}`);
    const response = await dbRef.remove();
    dispatch({ type: DELETE_NOTE });
  };
}