import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpLogin from './screens/SignupLoginScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import SettingScreen from './screens/SettingScreen';

export default function App() { 
  return ( 
  <AppContainer/> 
  ); 
} 
const switchNavigator = createSwitchNavigator({
   SignUpLogin:{screen: SignUpLogin},
   Drawer:{screen: AppDrawerNavigator},
   BottomTab: {screen: AppTabNavigator}, 
  }) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
