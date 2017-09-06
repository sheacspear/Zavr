import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export class Statistic extends React.Component {

    static navigationOptions = {
        title: 'Statistic',
        tabBarLabel: 'Statistic',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text >Statistic</Text>
                <Image
                    source={require('../../assets/icons/ic_timeline_black_24dp.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            </View>
        ),
    };

    render() {
        return (
            <Text>Statistic</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
