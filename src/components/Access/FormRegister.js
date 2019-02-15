import React, { Fragment } from 'react';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Input } from 'react-native-elements';

const FormRegister = props => (
  <Fragment>
    <Input
      leftIcon={
        <SimpleIcon
          name="lock"
          color="rgba(0, 0, 0, 0.38)"
          size={25}
          style={{ backgroundColor: 'transparent' }}
        />
      }
      value={props.value}
      secureTextEntry={true}
      keyboardAppearance="light"
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="default"
      returnKeyType={'done'}
      blurOnSubmit={true}
      containerStyle={{
        marginTop: 16,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
      }}
      inputStyle={{ marginLeft: 10 }}
      placeholder={'Confirmar senha'}
      ref={props.refCp}
      onSubmitEditing={props.submitEditing}
      onChangeText={props.change}
      errorMessage={props.errorMessage}
    />
  </Fragment>
);

export default FormRegister;