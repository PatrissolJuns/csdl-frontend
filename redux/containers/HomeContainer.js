import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as FolderActions from '../actions/folderAction';
import Home from './../../Components/Home';

const mapStateToProps = (state) => ({
    folders: state.folders
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(FolderActions, dispatch),
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default HomeContainer