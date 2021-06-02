
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './Components/AppTabNavigator';
import{createAppContainer,createSwitchNavigator} from 'react-navigation';


export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  )
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
