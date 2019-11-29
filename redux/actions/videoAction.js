import * as types from '../constants/VideoActionTypes';
// import * as axios from 'react-native-axios';
import axios from 'axios';

// const apiUrl = "https://jdl-nodejs.herokuapp.com/api/video";
const apiUrl = "https://otaku-nodejs.herokuapp.com/api/video";

export const fetchAllVideosDB = () => {
    return (dispatch) => {
        return axios.get(apiUrl + "/")
            .then(response => {
                console.log('sucess actions');
                console.log('count = ',response.data.length);
                dispatch(fetchVideos(response.data));
            })
            .catch(error => {
                console.log('error = ',error);
                throw(error);
            });
    };
};

export const addVideoDB = (video) => {
    console.log('inside action');
    return (dispatch) => {
        return axios.put(`${apiUrl}/add`, {video: video})
            .then(
                response => {
                    console.log("response.data = ",response.data.title);
                    dispatch(addVideo(response.data));
                },
                _error => {
                    console.log('error = ',_error);
                    throw(error);
                }
            );
    };
};

/*export const updateVideoDB = (_id, name, audioList, isAdd = true) => {
    return (dispatch) => {
        return axios.put(`${apiUrl}/update/${_id}`, {name, audioList, isAdd})
            .then(response => {
                console.log("response.data = ",response.data);
                if(response.status === 200) {
                    dispatch(updateVideo(response.data));
                    toast.success("Video updated successfully");
                } else {
                    toast.error("WARNING : Error while trying to update a video");
                }
            })
            .catch(error => {
                toast.error("Error while trying to update a video");
                throw(error);
            });
    };
};*/

export const deleteVideoDB = (_id) => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/delete/${_id}`)
            .then(response => {
                console.log("response.data = ",response.status);
                if(response.status === 200) {
                    dispatch(deleteVideo(_id));
                }
            })
            .catch(error => {
                throw(error);
            });
    };
};

const addVideo = (video) => ({
    type: types.ADD_VIDEO,
    _id: video._id,
    duration: video.duration,
    description: video.description,
    image: {
        height: video.image.height,
        url: video.image.url,
        width: video.image.width
    },
    isBookmarked: video.isBookmarked,
    publishAt: video.publishAt,
    statistics: {
        commentCount: video.statistics.commentCount,
        dislikeCount: video.statistics.dislikeCount,
        favoriteCount: video.statistics.favoriteCount,
        likeCount: video.statistics.likeCount,
        viewCount: video.statistics.viewCount,
    },
    tags: video.tags,
    title: video.title,
    youtubeId: id
});

/*const updateVideo = (video) => ({
    type: types.UPDATE_VIDEO,
    video: video

});*/

const deleteVideo = (_id) => ({
    type: types.DELETE_VIDEO,
    _id: _id
});

const fetchVideos = (videos) => ({
    type: types.FETCH_VIDEO,
    videos: videos
});