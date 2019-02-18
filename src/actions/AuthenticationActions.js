import firebase from 'firebase';
import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  USER_REGISTER_ERROR,
  USER_REGISTER_SUCCESS,
  USER_AUTH_ERROR,
  USER_AUTH_SUCCESS,
  PROGRESS_LOGIN
} from './types'; 
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const changeName = (value) => {
  return {
    type: CHANGE_NAME,
    payload: value
  }
}

export const changeEmail = (value) => {
  return {
    type: CHANGE_EMAIL,
    payload: value
  }
}

export const changePassword = (value) => {
  return {
    type: CHANGE_PASSWORD,
    payload: value
  }
}

export const userRegister = ({ name, email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailCript = b64.encode(email);

        firebase.database().ref(`/contatos/${emailCript}`)
          .push({ name })
          .then(value => {
            console.log(value)
            dispatch({ type: USER_REGISTER_SUCCESS });
            Actions.welcome({});
          })
      })
      .catch(erro => {
        dispatch({
          type: USER_REGISTER_ERROR,
          payload: erro.code
        })  
      });
  }
}

export const userAuthentication = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: PROGRESS_LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        dispatch({
          type: USER_AUTH_SUCCESS
        });
        Actions.home({});
      })
      .catch(error => 
        dispatch({
          type: USER_AUTH_ERROR,
          payload: error.code
        })
      );
  }
}