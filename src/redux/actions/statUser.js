import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from '../../services/auth/jwt/config';
import { GET_COUNT_USERS } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_PROFILE } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_REGISTER } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_VISITOR } from '../../@jumbo/constants/ActionTypes';

export const getStatCountUser = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    axios
      .get('/api/users/countStat')
      .then(data => {
        if (data) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_COUNT_USERS, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};


export const getStatProfileUser = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    axios
      .get('/api/users/index')
      .then(data => {
        if (data) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_COUNT_USERS_PROFILE, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const getStatRegistreUser = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    axios
      .get('/api/users/statRegister')
      .then(data => {
        if (data) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_COUNT_USERS_REGISTER, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const getUsersVisior = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    axios
      .get('/api/users/visitor')
      .then(data => {
        if (data) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_COUNT_USERS_VISITOR, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

