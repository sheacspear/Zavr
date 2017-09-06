import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import PetListScreen from '../screens/PetListScreen';


const Tab = TabNavigator({
    Home: {screen: HomeScreen},
    Feed: {screen: FeedScreen},
    PetList: {screen: PetListScreen},
}, {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#000000',
        showLabel: false
    },

});

export default Tab;


