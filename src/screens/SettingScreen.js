import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting',
    }

    render() {
        return (
            <View >
                <Text>
                    Setting
                </Text>
            </View>
        );
    }
}