import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from "./../screens/HomeScreen";
import LinksScreen from "../screens/FeedScreen";
import SettingsScreen from "../screens/PetListScreen";

const Stack = StackNavigator({
    HomeScreen: {screen: HomeScreen},
    LinksScreen: {screen: LinksScreen},
    SettingsScreen: {screen: SettingsScreen},
});

export default Stack;
