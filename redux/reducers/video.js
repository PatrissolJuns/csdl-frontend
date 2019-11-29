import * as types from "../constants/VideoActionTypes";

const video = (state = [], action) => {
    console.log('inside reducer = ',state);
    console.log('--------------------------------------------------------');
    console.log('--------------------------------------------------------');
    console.log('--------------------------------------------------------');
    switch (action.type) {
        case types.ADD_VIDEO:
            console.log('inside ADD_VIDEO = ',action.title);
            return Object.assign({}, state, {videos: [...state.videos, {
                    _id: action._id,
                    duration: action.duration,
                    description: action.description,
                    image: {
                        height: action.image.height,
                        url: action.image.url,
                        width: action.image.width
                    },
                    isBookmarked: action.isBookmarked,
                    publishedAt: action.publishedAt,
                    statistics: {
                        commentCount: action.statistics.commentCount,
                        dislikeCount: action.statistics.dislikeCount,
                        favoriteCount: action.statistics.favoriteCount,
                        likeCount: action.statistics.likeCount,
                        viewCount: action.statistics.viewCount,
                    },
                    tags: action.tags,
                    title: action.title
                }]});
        /*case types.UPDATE_VIDEO:
            // console.log("action.name = ",action.video.name);
            return state.map((_video) => {
                if (_video._id === action.video._id) {
                    return Object.assign({}, _video,{name: action.video.name, audioList: action.video.audioList})
                }
                else return _video;
            });*/
        case types.DELETE_VIDEO:
            return state.filter(_video => _video._id !== action._id);
        case types.FETCH_VIDEO:
            return Object.assign({}, state, {videos: action.videos});
        default:
            return state
    }
}

export default video;