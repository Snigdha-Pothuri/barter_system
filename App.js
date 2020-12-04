import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpLogin from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <View style={styles.container}>
            <SignUpLogin/>
            <HomeScreen/>
            <ExchangeScreen/>
      </View>
  );
}

const AppTabNavigator = createBottomTabNavigator({
 HomeScreen : {
      screen :HomeScreen,
  },
  BookRequest : {
      screen : ExchangeScreen,
  }
})   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
