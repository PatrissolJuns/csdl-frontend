import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as VideoActions from '../actions/videoAction';
import VideoList from './../../Components/VideoList';

const mapStateToProps = (state) => ({
    videos: state.videos
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(VideoActions, dispatch),
});

const VideoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoList);

export default VideoListContainer