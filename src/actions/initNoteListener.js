import firebase from 'firebase';
import { INIT_NOTE_LISTENER, NOTES_UPDATED } from './types';

export default function addNote(title = '', text = '') {
  return async (dispatch) => {
    dispatch({ type: INIT_NOTE_LISTENER });
    const dbRef = firebase.database().ref('/notes').on('child_added', (snapshot, prevChildKey) => {
      console.log(snapshot.val());
      console.log(prevChildKey);
      const payload = {
        key: snapshot.key,
        ...snapshot.val(),
      };

      dispatch({ type: NOTES_UPDATED, payload });
    });
  };
}