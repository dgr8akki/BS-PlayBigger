import moment from 'moment';
import axios from '../axios';
import * as actionType from './actionTypes';

export const setLoading = (payload) => ({ type: actionType.SET_LOADING, payload });
export const setKey = (payload) => ({ type: actionType.SET_KEY, payload });
export const setUpcomingData = (payload) => ({ type: actionType.SET_UPCOMING_DATA, payload });
export const setLiveData = (payload) => ({ type: actionType.SET_LIVE_DATA, payload });
export const setPastData = (payload) => ({ type: actionType.SET_PAST_DATA, payload });

export const getData = (key) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setKey(key));
  try {
    const res = await axios.get(`/api/list/campaign/${key}`);

    const results = res.data;
    dispatch(setData(results.data, key));
    return dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const setData = (payload, key) => async (dispatch) => {
  console.log("SETTING DATA: " , key, payload);
switch (key) {
    case 'upcoming':
      dispatch(setUpcomingData(payload));
      break;
    case 'past':
      dispatch(setPastData(payload))
      break;
    case 'live':
      dispatch(setLiveData(payload));
      break;
  }
}

export const updateData = (alias, createdOn, key) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.post(`/api/update/${alias}`, {
      createdOn,
    });

    dispatch(getData(key));
    return dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};
