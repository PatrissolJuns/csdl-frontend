import React, {Fragment} from "react";
import {Image, StyleSheet, Platform, StatusBar, ScrollView, Text, View} from "react-native";
// import {WebView} from "react-native-webview";
import * as axios from 'react-native-axios';

let GoogleApiKey = 'AIzaSyBydI5OOREdzLtA7wU_eJcqD04b82NImgc';


async function getData() {
    /*const response = await fetch(
        'https://www.googleapis.com/youtube/v3/videos?id=KVZ-P-ZI6W4&key='
        + GoogleApiKey
        + "&part=snippet,contentDetails,statistics,status", {
        method: 'GET'
    }).then((response) => response.json())
    .catch((error) => {
        console.error(error);
    });*/

    let url = "https://www.googleapis.com/youtube/v3/videos?id=KVZ-P-ZI6W4&key="
        + GoogleApiKey
        + "&part=snippet,contentDetails,statistics,status";

    return axios.get(url)
        .then(function (response) {
            /*console.log('response = ',Object.keys(response.data.items[0]));
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('thumbnails = ',response.data.items[0]);
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('thumbnails = ',response.data.items[0].snippet);
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('----------------------------');
            console.log('----------------------------');*/
        })
        .catch(function (error) {
            console.log(error);
        });

    // return await response;
}

try {
    const data = getData();
    // console.log('data = ',data);
} catch (e) {
    console.log('error = ', e);
}


const Favouris = (props) => {
    /*const [t, setT] = useState(null);*/
    return (
        <View>
            <Text> The search page</Text>

            /*<WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: 'https://m.youtube.com/watch?v=KVZ-P-ZI6W4'}}
            />*/
        </View>
    )
}

export default Favouris;

const styles = {
    titles: {
        fontSize: 52,
        marginRight: 10
    },
    header : {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10
    },
    imageStyle: {
        /*width: 100,
        height: 100,*/
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 10,
        marginRight: 20,
        overflow: 'hidden',
        width: 280,
    }
}
