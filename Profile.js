import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Profile extends React.Component {

  state = {
   
  }

  render() {
    return (
      <View>
        <View style={styles.topBar} >
          <Text style={styles.paragraph}>
            Приложение на две страницы
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.information} >
            <Image style={{width: 66, height: 66, borderRadius: 33}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94OYlaux6febHCdD2C3BAs48flcCYepUkz9uUQ4eO3rcbwPxr&s'}} />
            
            <View style={styles.name} >
              <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>
              <Text style={{color: '#4c75a3'}}>Онлайн</Text>
              <Text >В поисках работы</Text>
            </View>
          </View>
          
          <View style={styles.aboutMe}>
            <Text>
              Привет!
              <p>Меня зовут Айаал Новгородов и я начинающий программист. Сильные стороны - математика, физика. Моя страсть - музыка, сахалыы ырыа суруйабын, играю на гитаре, синтезаторе :)</p>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginTop: 65
  },
  topBar: {
    width: '100%',
    height: 65,
    backgroundColor: '#4c75a3',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12
  },
  paragraph: {
    fontSize: 18,
    color:"white",
    textAlign: 'center'
  },
  information: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderBottomColor: '#4c75a3'
  },
  name: {
    marginLeft: 16,
    flexDirection: 'column',
  },
  aboutMe: {
    paddingTop: 16
  }
});
