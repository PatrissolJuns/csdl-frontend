import React, {Fragment, useState} from "react";
import {Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, Keyboard, TextInput} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Overlay } from 'react-native-elements';
import {WebView} from "react-native-webview";


const ShowVideo = (props) => {
    console.log('inside the ShowVideo');

    return (
        <Fragment>
            <Text>insidddddd</Text>
            {/*<WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: 'https://m.youtube.com/watch?v=' + props}}
            />*/}
            {/*<Overlay
                isVisible={isVisible}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayStyle={{
                    paddingTop: (Dimensions.get('window').height - 180) /3 }}
            >


            </Overlay>*/}
        </Fragment>

    )
}

export default ShowVideo;

{/*<Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayStyle={{
                paddingTop: (Dimensions.get('window').height - 180) /3 }}
        >*/


    /*</Overlay>*/
}