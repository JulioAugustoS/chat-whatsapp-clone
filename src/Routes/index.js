import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

// Views
import Authentication from '../views/Authentication/Login';
import Welcome from '../views/Initial/Welcome';

const Routes = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="authentication" component={Authentication} hideNavBar />
        <Scene key="welcome" component={Welcome} hideNavBar />
      </Stack>
    </Router>
  )
}

export default Routes;