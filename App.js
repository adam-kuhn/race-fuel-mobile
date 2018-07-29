import {Navigation} from 'react-native-navigation'

import MainScreen from './src/screens/MainScreen'

Navigation.registerComponent('race-fuel.MainScreen', () => MainScreen)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'race-fuel.MainScreen',
    title: 'Race Fuel'
  }
})
