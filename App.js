import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stack from './src/navigation/Stack';
import Tab from './src/navigation/Tab';


import {StackNavigator, TabNavigator} from 'react-navigation';



export default class App extends React.Component {
    render() {
        return <Tab/>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


