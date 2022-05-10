import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from '../../services/auth/jwt/config';
import { GET_USER_DETAIL } from '../../@jumbo/constants/ActionTypes';

export const getUserDetail = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    axios
      .get('/api/detail/user')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USER_DETAIL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};
