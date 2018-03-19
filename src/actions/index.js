import axios from 'axios';
import { INCREMENT, DECREMENT } from '../constants';
import { FETCH_USER_SUCCESS } from '../constants';

export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 2000);
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const get_user = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/")
      .then(res => {
        dispatch(fetch_user(res.data.results[0]));
      })
      .catch(error => {
        console.log(error);
      })
  };
};

export const fetch_user = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
};
