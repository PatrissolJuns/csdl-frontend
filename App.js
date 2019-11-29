/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Navigation from './Navigation/navigator';
import {Button, Icon, Header} from "react-native-elements";
import {Platform, StatusBar, Text, View, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Provider } from 'react-redux';
import Store from './redux/store';

const App = () => {

    const handleOnePress = () => {
        console.log('yes hpres');
    };

    return (
        <Fragment>
            <Header
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                leftComponent={
                    <Icon
                        name='menu'
                        color='#fff'
                        onPress={() => handleOnePress()}
                    />
                }
                centerComponent={{ text: 'CSDL', style: { color: '#fff', fontSize: 25 } }}
                rightComponent={{ icon: 'search', color: '#fff' }}
            />
            <Provider store={Store}>
                <Navigation />
            </Provider>
        </Fragment>
    )
}

const styles = {
    header : {
        // marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10,
        // height: StatusBar.currentHeight*1.7
    },
    headerView: {
        backgroundColor: '#f03d28',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: StatusBar.currentHeight*1.7,
        paddingTop: (StatusBar.currentHeight*1.7 / 3 ),
        paddingBottom: (StatusBar.currentHeight*1.7 / 3 ),
        // marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase'
    }
}

export default App;
