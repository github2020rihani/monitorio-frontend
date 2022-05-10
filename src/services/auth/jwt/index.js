import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import { setAuthUser, setForgetPassMailSent, updateLoadUser } from '../../../redux/actions/Auth';
import React from 'react';
import axios from './config';

const JWTAuth = {
  onRegister: ({ name, email, password }) => {
    return dispatch => {
      dispatch(fetchStart());
      axios
        .post('api/register', {
          email: email,
          password: password,
          name: name,
        })
        .then(({ data }) => {
          if (data.token) {
             localStorage.setItem('token', data.token); 
             localStorage.setItem('user', data.user); 
             axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token; 
            dispatch(fetchSuccess());
            dispatch(JWTAuth.getAuthUser(true, data.token)); 
          } else {
            dispatch(fetchError(data.error));
          }
        })
        .catch(function(error) {
          dispatch(fetchError(error.message));
        });
    };
  },

  onLogin: ({ email, password }) => {
    return dispatch => {
      try {
        dispatch(fetchStart());
        axios
          .post('auth/login', {
            email: email,
            password: password,
          })
          .then(({ data }) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
              dispatch(fetchSuccess());
              dispatch(JWTAuth.getAuthUser(true, data.user));
            } else {
              dispatch(fetchError(data.message));
            }
          })
          .catch(function(error) {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },


  onLogout: (token) => {

    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      dispatch(fetchStart());
      axios
        .get('api/logout')
        .then(({ data }) => {
          if (data) {
            dispatch(fetchSuccess());
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(setAuthUser(null));
            localStorage.removeItem('nbrUsers');
            localStorage.removeItem('nbrProjetEncour');
            localStorage.removeItem('nbrProjetfinish');
            localStorage.removeItem('nbrProjets');     


          } else {
            dispatch(fetchError(data.error));
          }
        })
        .catch(function(error) {
          dispatch(fetchError(error.message));
        });
    };
  },

  getAuthUser: (loaded = false, token) => {
    return dispatch => {
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
      if (token) {
        dispatch(fetchStart());
        dispatch(updateLoadUser(loaded));
        axios
          .post('api/profile')
          .then(({ data }) => {
            if (data) {
              localStorage.setItem('user', data.user);
              localStorage.setItem('nbrUsers', data.nbrUsers);
              localStorage.setItem('nbrProjetEncour', data.nbrProjetEncour);
              localStorage.setItem('nbrProjetfinish', data.nbrProjetfinish);
              localStorage.setItem('nbrProjets', data.nbrProjets);
              dispatch(fetchSuccess());
              dispatch(setAuthUser(data.user));
            } else {
              dispatch(updateLoadUser(true));
            }
          })
          .catch(function(error) {
            dispatch(updateLoadUser(true));
          });
      } else {
        dispatch(fetchStart());
        dispatch(updateLoadUser(loaded));
        dispatch(updateLoadUser(true));
     }
    };
  },

  onForgotPassword: () => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(() => {
        dispatch(setForgetPassMailSent(true));
        dispatch(fetchSuccess());
      }, 300);
    };
  },
  getSocialMediaIcons: () => {
    return <React.Fragment> </React.Fragment>;
  },
};

export default JWTAuth;
