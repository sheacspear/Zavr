import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


export default class PetInfo extends React.Component {

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{flex: 2}}>
                    <Image style={styles.iconBig}
                           source={require('./../../assets/icons/PetInfo/leo.png')}
                    />
                </View>
                <View style={{flex: 3}}>
                    <View style={{flex: 1}}>
                        <Text>Leopold</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <View style={{flex: 1, alignItems: 'flex-start', flexDirection: 'row'}}>
                            <Text
                                style={{fontSize: 12, color: 'rgba(96,100,109, 1)'}}>Weight
                                29 g</Text>
                            <Image style={styles.icon}
                                   source={require('./../../assets/icons/PetInfo/plus.png')}
                            />
                        </View>
                        <View style={{flex: 2, alignItems: 'flex-end'}}>
                            <Text
                                style={{fontSize: 12, color: 'rgba(96,100,109, 1)'}}>Next
                                feed 10.12.2017 </Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        width: 18,
        height: 18,
    },
    iconBig: {
        width: 54,
        height: 54,
    }
});