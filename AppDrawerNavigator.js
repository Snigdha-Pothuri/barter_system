import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBarters from '../screens/MyBarters';
import NotificationScreen from '../screens/NotificationScreen'

 export const AppDrawerNavigator = createDrawerNavigator({
     Home : {
         screen : AppTabNavigator
     },
     Settings : {
         screen : SettingScreen
     },
     Notification:{
     screen:NotificationScreen
     },
     MyBarters:{
         screen : MyBarters
     }
    },
    {
        contentComponent : CustomSideBarMenu
    },
    { 
        initialRouteName : "Home"
 })
