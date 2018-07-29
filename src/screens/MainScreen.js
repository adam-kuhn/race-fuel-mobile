import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This will be Race Fuel for Mobile</Text>
        <Icon name='dashboard' size={30} color='blue' />
        <Icon2 name='eye' size={30} color='red' />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
