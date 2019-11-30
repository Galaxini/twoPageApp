import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import Login from './Login'
import Profile from './Profile'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  state = {
    page: 1,
    name: 'Kolya'
  }

  goToProfile = (name) => {
    this.setState({page: 2, name: name })
  }

  render() {
    if (this.state.page == 1){
      return(
        <Login goToProfile={this.goToProfile} />
      )
      
    } else {
      return(
        <Profile name={this.state.name} />
      )
    }
  }
}