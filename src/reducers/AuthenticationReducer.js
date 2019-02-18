import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  USER_REGISTER_ERROR,
  USER_REGISTER_SUCCESS,
  USER_AUTH_ERROR,
  USER_AUTH_SUCCESS,
  PROGRESS_LOGIN
} from '../actions/types';

const initialState = {
  name: '',
  email: '',
  password: '',
  error: '',
  loading: false
};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CHANGE_NAME: 
      return { ...state, name: action.payload }
    case CHANGE_EMAIL:
      return { ...state, email: action.payload }
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload }
    case USER_REGISTER_ERROR:
      return { ...state, error: action.payload}
    case USER_REGISTER_SUCCESS:
      return { ...state, name: '', password: '', error: '' }
    case USER_AUTH_ERROR:
      return { ...state, error: action.payload, loading: false }
    case USER_AUTH_SUCCESS: 
      return { ...state, error: '', loading: false }
    case PROGRESS_LOGIN: 
      return { ...state, error: '', loading: true }
    default:
      return state
  }
};