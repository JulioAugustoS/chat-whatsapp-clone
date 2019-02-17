import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import Routes from './Routes';
import { config } from './utils/firebase-config';

class App extends Component {
  componentDidMount(){
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  render(){
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
};

export default App;
