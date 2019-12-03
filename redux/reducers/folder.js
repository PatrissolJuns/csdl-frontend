import * as types from "../constants/FolderActionTypes";

const folder = (state = [], action) => {
    console.log('inside reducer = ',state);
    console.log('--------------------------------------------------------');
    console.log('--------------------------------------------------------');
    console.log('--------------------------------------------------------');
    switch (action.type) {
        case types.FETCH_FOLDER:
            return Object.assign({}, state, {folders: action.folders});
        default:
            return state
    }
}

export default folder;