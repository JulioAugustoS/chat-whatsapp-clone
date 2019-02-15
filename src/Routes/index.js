import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

// Views
import Login from '../views/Authentication/Login';

const Routes = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} hideNavBar />
      </Stack>
    </Router>
  )
}

export default Routes;