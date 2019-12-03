import Store from './../../redux/store';
import axios from 'axios';
import {BACKEND_URL} from "../../conf";

export const getFolder = (id, folders = getFolders()) => {
    return folders.filter(folder => folder.id === id)[0];
}

export const transformDate = (date) => {
    let created_at = '2019-11-30 10:31:29'.split(' ');
    let t = created_at[1].split(':');
    let d = new Date(created_at[0]);

    d.setHours(t[0]);
    d.setMinutes(t[1]);
    d.setSeconds(t[2]);
    return d;
}

export const transformFolder = (folder) => {
    return Object.assign({}, folder, {
        "created_at": transformDate(folder.created_at),
        "updated_at": transformDate(folder.updated_at),
        "deleted_at": transformDate(folder.deleted_at)
    });
}

export const transformFolders = (folders) => {
    return folders.map(folder => transformFolder(folder));
}

export const getFiles = (folder) => {
    return axios.get(BACKEND_URL + "//folder/files/" + folder.id)
            .then(response => {
                console.log('inside get files');
                // console.log('response.data = ',response.data);
                console.log('count = ',response.data.length);
                return response.data;
            })
            .catch(error => {
                console.log('error = ',error);
                throw(error);
            });;
}

export const getSubFolders = (folder, folders = getFolders()) => {
    return folders.filter(item => item.parent_id === folder.id);
}

export const getParentFolder = (folder, folders = getFolders()) => {
    console.log('folder = ', folder);
    return folders.filter(item => item.id === folder.parent_id)[0];
}

export const getFolders = () =>
{
    return Store.getState().folders;
}

export const getAntecedent = (folder) => {
    if(folder.parent_id === null) return [];
    let parentFolder = getParentFolder(folder);
    console.log('parentFolder = ',parentFolder);

    return parentFolder.parent_id !== null
            ? containtSubFolder(folder)
                ? getSubFolders(getParentFolder(parentFolder))
                : getSubFolders(parentFolder)
            : [parentFolder];
}

export const containtSubFolder = (folder) => {
    let result = getFolders().filter(f => f.parent_id === folder.id);
    return result > 0;
}
