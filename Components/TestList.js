import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Badge, Button, ListItem, ThemeProvider} from "react-native-elements";

const TestList = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                />

                <Badge
                    status="success"
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
                <Button
                    title="Go to Details"
                    onPress={() => props.navigation.navigate('Favouris')}
                />

                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </View>

        </ThemeProvider>
    );
}


const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'sdqd fff',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'ssss Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];

const theme = {
    Avatar: {
        rounded: true,
    },
    Badge: {
        textStyle: { fontSize: 30 },
    },
};


const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 80,
    }
});



export default TestList;



{/*import React, {Fragment} from "react";
import {StyleSheet, Platform, StatusBar, ScrollView, Text, View} from "react-native";
import {Header, Image, Tile} from "react-native-elements";
import VideoItem from './VideoItem'
import VideoList from "./VideoList";

const Home = (props) => {
    return (
        <View style={styles.header}>
            <Text style={{fontSize: 20}}>Home</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
            >
                <View style={styles.imageStyle}>
                    <Tile
                        imageSrc={require('./../assets/opening_2.png')}
                        height={200}
                    />
                </View>
                <View style={{marginLeft: 10 }}></View>
                <View style={styles.imageStyle}>
                    <Tile
                        imageSrc={require('./../assets/ending.png')}
                        height={200}
                    />
                </View>

            </ScrollView>
            <Text style={{fontSize: 20}}>Home</Text>
            {/*<ScrollView
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
            >

            </ScrollView>*
<VideoList />


</View>
)
}

export default Home;

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
        height: 100,*
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius:0,
        marginTop: 10,
        marginRight: 20,
        overflow: 'hidden',
        width: 280,
    }
}*/}