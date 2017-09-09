import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class FeedScreen extends React.Component {
    static navigationOptions = {
        title: 'Feed',
        tabBarLabel: 'Feed',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./../assets/icons/tab/feed.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Feed
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
