import firebase from 'firebase';
import { ADD_NOTE } from './types';

export default function addNote(title = '', text = '') {
  return async (dispatch) => {
    const dbRef = firebase.database().ref('/notes');
    const response = await dbRef.push({ title, text });
    // console.log(response.val());
    dispatch({ type: ADD_NOTE });
  };
}