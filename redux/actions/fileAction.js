import * as types from '../constants/FileActionTypes';
import { BACKEND_URL } from "../../conf";
import axios from 'axios';

export const addFileDB = () => {
    return (dispatch) => {
        return axios.post(BACKEND_URL + "/upload")
            .then(response => {
                console.log('sucess actions');
                console.log('response.data = ',response.data);
                console.log('count = ',response.data.length);
                dispatch(addFile(response.data));
            })
            .catch(error => {
                console.log('error = ',error);
                throw(error);
            });
    };
};

const addFile = (file) => ({
    type: types.ADD_FILE,
    file: file,
});

const getFile = (id) => ({
    type: types.ADD_FILE,
    id: id,
});