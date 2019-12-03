import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as FolderActions from '../actions/folderAction';
import FolderItem from "../../Components/FolderItem";

const mapStateToProps = (state) => ({
    folders: state.folders
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(FolderActions, dispatch),
});

const FolderItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FolderItem);

export default FolderItemContainer