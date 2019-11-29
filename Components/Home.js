import React, {Fragment} from "react";
import {StyleSheet, Platform, StatusBar, ScrollView, Text, View, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {PanelColor} from "../conf";
import {Icon} from "react-native-elements";

const Home = (props) => {
    return (
        <SafeAreaView style={styles.header}>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}>
                    <View>
                        <Icon
                            name='folder-o'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>Semestre 1</Text>
                        <Text style={{fontSize: 10}}>202 fichiers</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}>
                    <View>
                        <Icon
                            name='folder-o'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>Semestre 2</Text>
                        <Text style={{fontSize: 10}}>181 fichiers</Text>
                    </View>
                </TouchableOpacity>



            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = {
    titles: {
        fontSize: 52,
        marginRight: 10
    },
    header : {
        //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10
    },
    imageStyle: {
        /*width: 100,
        height: 100,*/
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius:0,
        marginTop: 10,
        marginRight: 20,
        overflow: 'hidden',
        width: 280,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    Container: {
        flex: 1
    },
    WebViewStyle: {
        margin: 20
    }
}
