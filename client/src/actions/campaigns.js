import moment from 'moment';
import axios from '../axios';
import * as actionType from './actionTypes';

export const setData = (payload) => ({ type: actionType.SET_DATA, payload });
export const setLoading = (payload) => ({ type: actionType.SET_LOADING, payload });
export const setKey = (payload) => ({ type: actionType.SET_KEY, payload });

export const getData = (key) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setKey(key));
  try {
    const res = await axios.get(`/api/list/campaign/${key}`);

    const results = res.data;
    if (Number(results.data.length) > 0) {
      dispatch(setData(results.data));
    }
    return dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

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
