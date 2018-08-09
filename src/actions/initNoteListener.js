import firebase from 'firebase';
import { INIT_NOTE_LISTENER, NOTES_UPDATED, NOTE_DELETED } from './types';

export default function addNote(title = '', text = '') {
  return async (dispatch) => {
    dispatch({ type: INIT_NOTE_LISTENER });
    firebase.database().ref('/notes').on('child_added', (snapshot, prevChildKey) => {

      const payload = {
        key: snapshot.key,
        ...snapshot.val(),
      };

      dispatch({ type: NOTES_UPDATED, payload });
    });
    firebase.database().ref('/notes').on('child_removed', (snapshot, prevChildKey) => {

      const payload = {
        key: snapshot.key,
      };
      
      dispatch({ type: NOTE_DELETED, payload });
    });
  };
}