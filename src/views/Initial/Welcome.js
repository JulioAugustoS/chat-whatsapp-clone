import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const image = require('../../assets/images/bg_screen2.jpg');

const Welcome = props => (
  <View style={style.container}>
    <ImageBackground source={image} style={style.bgImage}>
      <View style={style.content}>
        <View style={style.titleContainer}>
          <View>
            <Text style={style.titleText}>Seja Bem Vindo!</Text>
            <Text style={style.subtitleText}>Seu cadastro foi realizado com sucesso.</Text>
          </View>
        </View>
        <Button 
          buttonStyle={style.Button}
          containerStyle={{ marginTop: 32, flex: 0 }}
          activeOpacity={0.8}
          title='Fazer Login'
          onPress={() => Actions.authentication({})}
          titleStyle={style.TextButton}
        />
      </View>
    </ImageBackground>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },  
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
  },
  subtitleText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  TextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'rgba(52, 152, 219,1.0)',
    borderRadius: 10,
    height: 50,
    width: '100%',
  },
});

export default Welcome;