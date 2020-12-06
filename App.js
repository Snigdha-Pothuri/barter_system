import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpLogin from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
            <AppContainer/>
      </View>
  );
}

const AppTabNavigator = createBottomTabNavigator({
 HomeScreen : {
      screen :HomeScreen,
  },
ExchangeScreen : {
      screen : ExchangeScreen,
  }
})   

const AppContainer = createAppContainer(switchNavigator);
const switchNavigator = createSwitchNavigator({ 
  SignUpLogin:{screen: SignUpLogin},
   BottomTab:{screen: AppTabNavigator}
   })
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
