import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export class SetMenu extends React.Component {

    static navigationOptions = {
        title: 'SetMenu',
        tabBarLabel: 'SetMenu',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={require('../../assets/icons/HomeScreen/menu.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                <Text style={{color: tintColor}}>SetMenu</Text>
            </View>
        ),
    };

    render() {
        return (
            <Text>SetMenu</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
