import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export class DiaryFood extends React.Component {

    static navigationOptions = {
        title: 'DiaryFood',
        tabBarLabel: 'DiaryFood',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={require('../../assets/icons/HomeScreen/food.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                <Text style={{color: tintColor}}>DiaryFood</Text>
            </View>
        ),
    };

    render() {
        return (
            <Text>DiaryFood</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
