import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';

export default combineReducers({
  Authentication: AuthenticationReducer
});