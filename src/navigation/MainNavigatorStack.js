import React from 'react';
import {StackNavigator} from 'react-navigation';
import SettingScreen from "./../screens/SettingScreen";
import NavigatorTab from './MainNavigatorTab';

const MainNavigatorStack = StackNavigator({
    NavigatorTab: {screen: NavigatorTab},
    SettingScreen: {screen: SettingScreen},
});

export default MainNavigatorStack;
