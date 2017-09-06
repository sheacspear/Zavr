import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class PetListScreen extends React.Component {
    static navigationOptions = {
        title: 'Pet List',
        tabBarLabel: 'Pet List',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./../assets/icons/ic_view_list_black_24dp.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    Pet List
                </Text>
            </ScrollView>
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
