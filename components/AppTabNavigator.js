import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
export const AppTabNavigator = createBottomTabNavigator({
 HomeScreen : {
      screen :HomeScreen,
  },
ExchangeScreen : {
      screen : ExchangeScreen,
  }
})   
