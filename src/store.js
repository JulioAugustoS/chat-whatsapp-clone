import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(ReduxThunk)
);

export default store;