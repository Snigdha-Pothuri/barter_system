import {createStackNavigator} from 'react-navigation-stack';
import ExchangeScreen from "../screens/ExchangeScreen";
import HomeScreen from '../screens/HomeScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen"

export const AppStackNavigator = createStackNavigator({
    ReceiverDetails : {
        screen : ReceiverDetailsScreen,
        navigationOptions:{
            headerShown : false
        }
    },
     Home : {
      screen : HomeScreen,
      navigationOptions:{
        headerShown : false
      }
  }
}, 


{

initialRouteName : "Home"

})
