import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from '../../services/auth/jwt/config';
import { GET_COUNT_PROJET_INPROGRESS } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_FINISH } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_CREATED } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_LOCALISATION } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_ETAT } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_SECTEUR } from '../../@jumbo/constants/ActionTypes';

export const getProjetInprogress = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/inprogress')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_INPROGRESS, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };

  export const getProjetFinish = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/finish')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_FINISH, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };

  export const getProjetByLocalisaltion = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/index2')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_BY_LOCALISATION, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };

  export const getProjetCreated = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/index')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_CREATED, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };

  export const getProjetByEtat = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/index3')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_BY_ETAT, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };

  export const getProjetBySecteur = (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('/api/projet/by/secteur')
        .then(data => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch({ type: GET_COUNT_PROJET_BY_SECTEUR, payload: data.data });
          } else {
            dispatch(fetchError('Something went wrong'));
          }
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };