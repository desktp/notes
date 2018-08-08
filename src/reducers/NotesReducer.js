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
    default: return state;
  }
};
