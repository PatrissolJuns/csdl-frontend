import * as types from '../constants/FolderActionTypes';
import axios from 'axios';
import { BACKEND_URL } from "../../conf";
import { transformFolders } from './../selectors/folder';

export const fetchAllFoldersDB = () => {
    return (dispatch) => {
        return axios.get(BACKEND_URL + "/folders")
            .then(response => {
                console.log('sucess actions');
                // console.log('response.data = ',response.data);
                console.log('count = ',response.data.length);
                dispatch(fetchFolders(response.data));
            })
            .catch(error => {
                console.log('error = ',error);
                throw(error);
            });
    };
};

const getFolder = (id) => ({
    type: types.GET_FOLDER,
    id: id
});

const fetchFolders = (folders) => ({
    type: types.FETCH_FOLDER,
    folders: transformFolders(folders)
});