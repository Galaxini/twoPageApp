import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Login extends React.Component {

  state = {
    login: '',
    pass: ''
  }

  goToProfile = () => {
    if (this.state.login != '' && this.state.pass != ''){
      this.props.goToProfile(this.state.login)
    }  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Приложение на две страницы
        </Text>
        <View>
          <TextInput
            style={styles.inputTop}
            onChangeText={text => this.setState({login: text})}
            value={this.state.login}
            placeholder={"Введите ваше имя"}
          />
          <TextInput
            style={styles.inputBottom}
            onChangeText={text => this.setState({pass: text})}
            value={this.state.pass}
            autoCompleteType={"password"}
            secureTextEntry={true}  
            placeholder={"Введите пароль"}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.goToProfile}>
              <Text style={styles.buttonText}>
                Войти
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4c75a3',
    padding: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    color:"white",
    textAlign: 'center',
  },
  inputTop: {
    width: "100%",
    height: 45,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 1,
    padding: 16
  },
  inputBottom: {
    width: "100%",
    height: 45,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 16
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#224b7a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
