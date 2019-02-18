import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../components/Access/Styles';
import FormLogin from '../../components/Access/FormLogin';
import FormRegister from '../../components/Access/FormRegister';

import { 
  changeName,
  changeEmail, 
  changePassword,
  userRegister
} from '../../actions/AuthenticationActions';

const BG_IMAGE = require('../../assets/images/bg_screen1.jpg');

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
  return (
    <View style={Styles.selectorContainer}> 
      <View style={selected && Styles.selected} />
    </View>
  )
}

class Login extends Component {
  constructor(props){
    super(props);

    this.state = { 
      isLoading: false,
      selectedCategory: 0,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmationValid: true
    }
    
    this.selectCategory = this.selectCategory.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  selectCategory = (selectedCategory) => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      isLoading: false
    });
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  login = () => {
    const { email, password } = this.state;
    // this.setState({ isLoading: true });

    // setTimeout(() => {
    //   LayoutAnimation.easeInEaseOut();
    //   this.setState({
    //     isLoading: false,
    //     isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
    //     isPasswordValid: password.length >= 8 || this.passwordInput.shake()
    //   })
    // }, 1500);
  }

  signUp = () => {
    const { passwordConfirmation } = this.state;
    const { name, email, password } = this.props;

    LayoutAnimation.easeInEaseOut();
    this.setState({ isLoading: true });

    if(!this.validateEmail(email)){
      this.setState({ 
        isLoading: false,
        isEmailValid: this.validateEmail(email) || this.emailInput.shake() 
      })
    }

    if(password.length < 6){
      this.setState({
        isLoading: false,
        isPasswordValid: password.length >= 8 || this.passwordInput.shake()
      })
    }

    if(password === passwordConfirmation){
      this.setState({ isLoading: false });
      this.props.userRegister({
        name,
        email,
        password
      });
    }else{
      this.setState({
        isLoading: false,
        isConfirmationValid: password === passwordConfirmation || this.confirmationInput.shake()
      })
    }
  }

  render(){
    const { 
      isLoading, 
      selectedCategory,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      passwordConfirmation
    } = this.state;

    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    return (
      <View style={Styles.container}>
        <ImageBackground source={BG_IMAGE} style={Styles.bgImage}>
          <View>
            <KeyboardAvoidingView
              contentContainerStyle={Styles.loginContainer}
              behavior="position"
            >
              <View style={Styles.titleContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={Styles.titleText}>WhatsApp Clone</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  disabled={isLoading}
                  clear
                  activeOpacity={0.7}
                  onPress={() => this.selectCategory(0)}
                  containerStyle={{ flex: 1 }}
                  titleStyle={[
                    Styles.categoryText,
                    isLoginPage && Styles.selectedCategoryText,
                  ]}
                  title={'Entrar'}
                />
                <Button 
                  disabled={isLoading}
                  clear
                  activeOpacity={0.7}
                  onPress={() => this.selectCategory(1)}
                  containerStyle={{ flex: 1 }}
                  titleStyle={[
                    Styles.categoryText,
                    isSignUpPage && Styles.selectedCategoryText
                  ]}
                  title={'Cadastrar-se'}
                />
              </View>
              <View style={Styles.rowSelector}>
                <TabSelector selected={isLoginPage} />
                <TabSelector selected={isSignUpPage} />
              </View>
              <View style={Styles.formContainer}>
                { isSignUpPage && (
                <Input 
                  leftIcon={
                    <Icon 
                      name="user"
                      color="rgba(0, 0, 0, 0.38)"
                      size={26}
                      style={{ backgroundColor: 'transparent' }}
                    />
                  }
                  value={this.props.name}
                  keyboardAppearance="light"
                  autoFocus={false}
                  autoCorrect={false}
                  returnKeyType="next"
                  inputStyle={{ marginLeft: 10 }}
                  placeholder={'Nome'}
                  containerStyle={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                  }}
                  onChangeText={text => this.props.changeName(text)}
                /> ) }
                <FormLogin 
                  valueEmail={this.props.email}
                  refEmail={input => (this.emailInput = input)}
                  submitEditingEmail={() => this.passwordInput.focus()}
                  emailChange={text => this.props.changeEmail(text)}
                  errorMessageEmail={
                    isEmailValid ? null : 'Informe um email valido'
                  }
                  valuePass={this.props.password}
                  keyTypePass={isSignUpPage ? 'next' : 'done'}
                  refPass={input => (this.passwordInput = input)}
                  submitEditingPass={() => 
                    isSignUpPage
                      ? this.confirmationInput.focus()
                      : this.login()
                  }
                  changePass={password => this.props.changePassword(password)}
                  errorMessagePass={
                    isPasswordValid
                      ? null 
                      : 'A senha deve ter no minimo 6 caracteres'
                  }
                />
                { isSignUpPage && (
                    <FormRegister 
                      value={passwordConfirmation}
                      refCp={input => (this.confirmationInput = input)}
                      submitEditing={this.signUp}
                      change={passwordConfirmation => 
                        this.setState({ passwordConfirmation })
                      }
                      errorMessage={
                        isConfirmationValid
                          ? null
                          : 'As senhas informadas não correspondem!'
                      }
                    />
                  )
                }
                <Button 
                  buttonStyle={Styles.loginButton}
                  containerStyle={{ marginTop: 32, flex: 0 }}
                  activeOpacity={0.8}
                  title={isLoginPage ? 'Entrar' : 'Cadastrar'}
                  onPress={isLoginPage ? this.login : this.signUp}
                  titleStyle={Styles.loginTextButton}
                  loading={isLoading}
                  disabled={isLoading}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={Styles.helpContainer}> 
              <Button 
                title={'Precisa de ajuda?'}
                titleStyle={{ color: 'white' }}
                buttonStyle={{ backgroundColor: 'transparent' }}
                underlayColor="transparent"
                onPress={() => console.log('Account created')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.Authentication.name,
  email: state.Authentication.email,
  password: state.Authentication.password,
  error: state.Authentication.error,
})

export default connect(
  mapStateToProps, 
  { 
    changeName,
    changeEmail, 
    changePassword,
    userRegister 
  })(Login);