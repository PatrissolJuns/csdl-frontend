import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as VideoActions from '../actions/videoAction';
import Home from './../../Components/Home';

const mapStateToProps = (state) => ({
    videos: state.videos
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(VideoActions, dispatch),
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default HomeContainer