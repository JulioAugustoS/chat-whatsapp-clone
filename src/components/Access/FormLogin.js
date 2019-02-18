import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Input } from 'react-native-elements';

const FormLogin = props => (
  <Fragment>
    <Input 
      leftIcon={
        <Icon 
          name="envelope-o"
          color="rgba(0, 0, 0, 0.38)"
          size={25}
          style={{ backgroundColor: 'transparent' }}
        />
      }
      value={props.valueEmail}
      keyboardAppearance="light"
      autoFocus={false}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      returnKeyType="next"
      inputStyle={{ marginLeft: 10 }}
      placeholder={'Email'}
      containerStyle={{
        marginTop: 16,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
      }}
      ref={props.refEmail}
      onSubmitEditing={props.submitEditingEmail}
      onChangeText={props.emailChange}
      errorMessage={props.errorMessageEmail}
    />
    <Input 
      leftIcon={
        <SimpleIcon
          name="lock"
          color="rgba(0, 0, 0, 0.38)"
          size={25}
          style={{ backgroundColor: 'transparent' }}
        />
      }
      value={props.valuePass}
      keyboardAppearance="light"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      returnKeyType={props.keyTypePass}
      blurOnSubmit={true}
      containerStyle={{
        marginTop: 16,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
      }}
      inputStyle={{ marginLeft: 10 }}
      placeholder={'Senha'}
      ref={props.refPass}
      onSubmitEditing={props.submitEditingPass}
      onChangeText={props.changePass}
      errorMessage={props.errorMessagePass}
    />
  </Fragment>
);

export default FormLogin;
