import * as actionType from '../actions/actionTypes';

const INITIAL = {
  list: [],
  loading: false,
  key: 'upcoming',
};

export default (state = INITIAL, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA:
      return { ...state, list: payload };
    case actionType.SET_LOADING:
      return { ...state, loading: payload };
    case actionType.SET_KEY:
      return { ...state, key: payload };
    default:
      return state;
  }
};
