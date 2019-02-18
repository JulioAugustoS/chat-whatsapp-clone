import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Header from '../../components/Header';

class Chats extends Component {
  render(){
    return (
      <View>
        <Header textTitle="Chats" />
      </View>
    )
  }
}

export default Chats;