import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  notes: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.NOTES_UPDATED: 
      return {
        ...state,
        notes: [payload, ...state.notes]
      }
    case types.NOTE_DELETED:
     const { notes } = state;
     const elementToRemove = notes.find(n => n.key === payload.key);
     notes.splice(notes.indexOf(elementToRemove), 1);
      return {
        ...state,
        notes: [...notes],
      }
    default: return state;
  }
};
