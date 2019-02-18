import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Router, Stack, Scene } from 'react-native-router-flux';

// Views
import Authentication from '../views/Authentication/Login';
import Welcome from '../views/Initial/Welcome';
import Camera from '../views/Camera';
import Chats from '../views/Chats';
import Settings from '../views/Settings';

// Cores Textos
const inativo = "#7f8c8d";
const ativo = "#3498db";

const TabIcon = ({ title, focused }) => {
  switch (title) {
    case 'Camera':
      return (
        <View style={style.tab}>
          <Icon 
            name="camera" 
            solid
            size={20} 
            color={focused ? ativo : inativo}
          />
          <Text style={focused ? style.tabTextOn : style.tabText}>Câmera</Text>
        </View>
      )
    case 'Chats':
      return (
        <View style={style.tab}>
          <Icon 
            name="comments" 
            solid
            size={20} 
            color={focused ? ativo : inativo}
          />
          <Text style={focused ? style.tabTextOn : style.tabText}>Conversas</Text>
        </View>
      )
    case 'Settings':
      return (
        <View style={style.tab}>
          <Icon 
            name="cogs" 
            solid
            size={20} 
            color={focused ? ativo : inativo}  
          />
          <Text style={focused ? style.tabTextOn : style.tabText}>Configurações</Text>
        </View>
      )
  }
}

class Routes extends Component {
  state = {
    auth: false
  }

  async componentDidMount(){
    if(await AsyncStorage.getItem('@Authentication')){
      this.setState({
        auth: true
      })
    }
  }

  render(){
    const { auth } = this.state
    return (
      <Router>
        <Stack key="root">
          <Scene key="authentication" component={Authentication} hideNavBar initial={!auth} />
          <Scene key="welcome" component={Welcome} hideNavBar />
          <Scene 
            icon={TabIcon} 
            tabs 
            hideNavBar
            showLabel={false}
            style={style.tabBar}
            initial={auth} 
          > 
            <Scene key="camera" component={Camera} title="Camera" hideNavBar />
            <Scene key="chats" component={Chats} title="Chats" hideNavBar initial />
            <Scene key="settings" component={Settings} title="Settings" hideNavBar />
          </Scene>
        </Stack>
      </Router>
    );
  }
}

const style = StyleSheet.create({
  tabBar: {
    height: 50
  },
  tab: {
    alignItems: 'center'
  },
  textSize: {
    fontSize: 11
  },  
  tabText: {
    color: inativo,
    fontSize: 11,
    marginTop: 5
  },
  tabTextOn: {
    color: ativo,
    fontSize: 11,
    marginTop: 5
  }
});

export default Routes;