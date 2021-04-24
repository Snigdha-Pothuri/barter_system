import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBarters from '../screens/MyBarters';

 export const AppDrawerNavigator = createDrawerNavigator({
     Home : {
         screen : AppTabNavigator
     },
     Settings : {
         screen : SettingScreen
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
