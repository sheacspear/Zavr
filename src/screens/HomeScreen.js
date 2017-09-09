import React from 'react';
import {
    Image,
    Platform,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    TouchableHighlight
} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import {SetMenu} from '../components/SetMenu/index';
import {DiaryFood} from '../components/DiaryFood/index';
import {Statistic} from '../components/Statistic/index';
import PetInfo from "../components/PetInfo/index";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        //title: "Home",
        header: null,
        //tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./../assets/icons/tab/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        const {navigate} = this.props.navigation;

        const InnerTabs = TabNavigator({
            SetMenu: {screen: SetMenu},
            FoodDiary: {screen: DiaryFood},
            Statistic: {screen: Statistic},
        }, {
            swipeEnabled: true,
            animationEnabled: true,
            tabBarPosition: "top",
            tabBarOptions: {
                activeTintColor: '#2337c9',
                showLabel: false,
                showIcon: true,
                labelStyle: {
                    fontSize: 12,
                },
                tabStyle: {
                    width: 100,
                },
                style: {
                    backgroundColor: '#FFFFFF',
                }
            },
        });


        return (
            <View style={styles.container}>

                <View style={[{backgroundColor: '#ffa834', height: 25}]}>
                </View>

                <View style={[styles.titleInfo, {flex: 1, flexDirection: 'row',}]}>
                    <View style={{flex: 1, alignItems: 'flex-start', width: 6}}>
                    </View>
                    <View style={{flex: 2, alignItems: 'flex-start', width: 50}}>
                    </View>
                    <View style={{flex: 6, alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold',}}>My Leopold</Text>
                    </View>

                    <View style={{flex: 2, alignItems: 'flex-end', width: 50,}}>
                        <TouchableOpacity onPress={() => navigate('SettingScreen')}>
                            <Image
                                source={require('../assets/icons/App/settings.png')}
                                style={[styles.icon, {tintColor: '#000000'}]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-start', width: 6}}>
                    </View>
                </View>


                <View style={styles.petInfo}>
                    <PetInfo/>
                </View>
                <View style={styles.tabInfo}>
                    <InnerTabs style={{height: 5,}}/>
                </View>
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
        backgroundColor: '#fff',
    },
    titleInfo: {
        backgroundColor: '#ffa834',

    },
    petInfo: {
        flex: 2,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        paddingVertical: 20,
    },
    tabInfo: {
        flex: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },

    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
