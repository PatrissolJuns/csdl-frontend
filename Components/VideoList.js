import React, {Fragment, useState, useEffect} from "react";
import {FlatList, View, Text} from "react-native";
import VideoItem from './VideoItem'
import {recipes} from './Food/dataArrays'


const VideoList = ({...props}) => {
    /*const [videos, setVideos] = useState([]);*/

    /*useEffect(() => {
        setVideos(props.videos)
    },{});*/

    return (
        <Fragment>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={props.videos}
                renderItem={({item}) => { return <VideoItem item={item} />}}
                /*renderItem={({item}) => <Text>{item._id}</Text>}*/
                keyExtractor={item => `${item._id}`}
            />
        </Fragment>
    )
}


export default VideoList;
