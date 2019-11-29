import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as VideoActions from '../actions/videoAction';
import VideoManage from "../../Components/VideoManage";

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(VideoActions, dispatch),
});

const VideoManageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoManage);

export default VideoManageContainer