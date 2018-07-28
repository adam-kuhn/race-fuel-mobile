import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This will be Race Fuel for Mobile</Text>
        <Icon name='dashboard' size={30} color='blue' />
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
