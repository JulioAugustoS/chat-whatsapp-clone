import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

// Views
import Authentication from '../views/Authentication/Login';
import Welcome from '../views/Initial/Welcome';
import Home from '../views/Home';

const Routes = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="authentication" component={Authentication} hideNavBar />
        <Scene key="welcome" component={Welcome} hideNavBar />
        <Scene key="home" component={Home} />
      </Stack>
    </Router>
  )
}

export default Routes;