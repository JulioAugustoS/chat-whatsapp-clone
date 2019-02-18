import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

const { HEIGHT } = Dimensions.get('window');

const Header = props => {
  const _backButton = () => (
    <TouchableOpacity
      style={style.backButton}
      onPress={() => Actions.pop({})}
    >
      <Icon name="angle-left" size={30} />
    </TouchableOpacity>
  )


  return (
    <View style={[style.header]}>
      <Text style={style.textTitle}>{ props.textTitle }</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: HEIGHT >= '812' ? 74 : Platform.OS === 'ios' ? 64 : 60,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: HEIGHT >= '812' ? 15 : 0, 
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  textTitle: {
    textAlign: 'center',
    color: '#333',
    marginTop: Platform.OS === 'ios' ? 15 : 0,
    fontSize: 16
  }
});

export default Header;
