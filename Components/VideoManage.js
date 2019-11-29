import React, {Fragment, useState} from "react";
import {Image, StyleSheet, TouchableOpacity, Text, View, Dimensions, Keyboard, TextInput} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Overlay } from 'react-native-elements';
import axios from "axios";
import {fetchAllVideosDB} from "../redux/actions/videoAction";


const getVideoDetailFormYoutube = (id) => {
    let GoogleApiKey = 'AIzaSyBydI5OOREdzLtA7wU_eJcqD04b82NImgc';

    let url = "https://www.googleapis.com/youtube/v3/videos?id="+ id +"&key="
        + GoogleApiKey
        + "&part=snippet,contentDetails,statistics,status";

    return axios.get(url)
        .then(function (response) {
            console.log('thumbnails = ',response.data.items[0]);
            let item = response.data.items[0];

            if(item !== undefined)
            {
                let image = {};

                if(item.snippet.thumbnails.hasOwnProperty('high'))
                {
                    image = {
                        height: item.snippet.thumbnails.high.height,
                        url: item.snippet.thumbnails.high.url,
                        width: item.snippet.thumbnails.high.width
                    }
                } else if(item.snippet.thumbnails.hasOwnProperty('medium'))
                {
                    image = {
                        height: item.snippet.thumbnails.medium.height,
                        url: item.snippet.thumbnails.medium.url,
                        width: item.snippet.thumbnails.medium.width
                    }
                } else if(item.snippet.thumbnails.hasOwnProperty('standard'))
                {
                    image = {
                        height: item.snippet.thumbnails.standard.height,
                        url: item.snippet.thumbnails.standard.url,
                        width: item.snippet.thumbnails.standard.width
                    }
                } else if(item.snippet.thumbnails.hasOwnProperty('default'))
                {
                    image = {
                        height: item.snippet.thumbnails.default.height,
                        url: item.snippet.thumbnails.default.url,
                        width: item.snippet.thumbnails.default.width
                    }
                }


                let video = {
                    duration: item.contentDetails.duration,
                    description: item.snippet.description,
                    image: {
                        height: image.height,
                        url: image.url,
                        width: image.width
                    },
                    isBookmarked: false,
                    publishedAt: item.snippet.publishedAt,
                    statistics: {
                        commentCount: item.statistics.commentCount,
                        dislikeCount: item.statistics.dislikeCount,
                        favoriteCount: item.statistics.favoriteCount,
                        likeCount: item.statistics.likeCount,
                        viewCount: item.statistics.viewCount,
                    },
                    tags: item.snippet.tags,
                    title: item.snippet.localized.title,
                    youtubeId: id
                };


                return video;
            }

            return null;
        })
        .catch(error => {
            console.log("error getVideoDetailFormYoutube = ",error);
            return null;
        });
}

const VideoManage = ({...props}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [showError, setShowError] = useState(false);
    const [val, setVal] = useState('');
    const [video, setVideo] = useState(null);
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('propsvideo = ',props.videos.length);

    // props.actions.fetchAllVideosDB();

    const handleOnPress = (event) => {
        event.preventDefault();
        // setVal();
        let id = '';

        if(val !== '' && val !== undefined){
            // https://youtu.be/HOLTvhv1eWM
            if(!/youtu/.test(val)) id = val;
            else {
                let tab = val.split('youtu');
                if(/\.be/.test(tab[1])) {
                    id = val.split('.be/')[1];
                    setVal(id);
                } else {
                    id = val.split('watch?v=')[1];
                    setVal(id);
                }
            }

        }

        if(id !== '') {
            getVideoDetailFormYoutube(id).then(
                _data => {
                    let videoDetail = _data;
                    // console.log('stringify = ',JSON.stringify(videoDetail));
                    console.log('----------------------------');
                    console.log('----------------------------');
                    console.log('----------------------------');
                    if(videoDetail != null) {
                        props.actions.addVideoDB(JSON.stringify(videoDetail));
                        setIsAdded(true);
                    }
                    else setShowError(true);
                })
                /*.catch(
                    _error => {
                        console.log('error inside = ',_error);
                        throw error;
                    }
            )*/;
        }
    };
    const handleOnChangeText = (value) => {
        setVal(value);
    };

    const { navigate } = props.navigation;

    const handleRedirection = () => {
        navigate('Home');
    };

    return (
            <Fragment>
                {
                    isAdded
                        ?
                        <View>
                            <Text style={{textAlign: 'center', color: 'green', fontSize: 20, marginBottom: 10}}> The video has successfully added</Text>
                            <Text
                                style={{textAlign: 'center', fontWeight: 'bold', color: 'green', fontSize: 20, marginBottom: 10}}
                                onPress={handleRedirection}
                            > Got ot the home page</Text>
                        </View>
                        :
                        <View style={{justifyContent: 'center'}}>
                            {/*<TouchableOpacity>*/}
                            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10}}> The video manage page</Text>
                            <Input
                                placeholder='Enter the url video'
                                errorStyle={{ color: 'red' }}
                                // errorMessage='Please enter a valid message'
                                leftIcon={
                                    <Icon
                                        name="plus-circle"
                                        type="font-awesome"
                                        size={24}
                                        color='black'
                                    />
                                }
                                onBlur={Keyboard.dismiss}
                                onChangeText={handleOnChangeText}
                            />
                            <Button
                                title="Add"
                                containerStyle={{marginTop: 10}}
                                onPress={(event) => handleOnPress(event)}
                            />
                            <Text> Value = {val} </Text>
                            <Text> Count = {props.videos.length} </Text>
                            {showError && <Text style={{color: 'red'}}> Please enter a correct youtube url or id </Text>}
                            {video !== undefined && video !== null
                                ? <Text> video = {video.title} </Text>
                                : <Text> video = Invalid video </Text>
                            }
                            {/*</TouchableOpacity>*/}
                        </View>
                }
            </Fragment>

    )
}

export default VideoManage;

{/*<Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayStyle={{
                paddingTop: (Dimensions.get('window').height - 180) /3 }}
        >*/


    /*</Overlay>*/
}