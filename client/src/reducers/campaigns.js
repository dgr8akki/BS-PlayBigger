import * as actionType from '../actions/actionTypes';

const INITIAL = {
  up_list: [],
  past_list: [],
  live_list: [],
  loading: false,
  key: 'upcoming',
};

export default (state = INITIAL, { type, payload }) => {
  switch (type) {
    case actionType.SET_UPCOMING_DATA:
      return { ...state, up_list: payload };
    case actionType.SET_LIVE_DATA:
      return { ...state, live_list: payload };
    case actionType.SET_PAST_DATA:
      return { ...state, past_list: payload };
    case actionType.SET_LOADING:
      return { ...state, loading: payload };
    case actionType.SET_KEY:
      return { ...state, key: payload };
    default:
      return state;
  }
};
