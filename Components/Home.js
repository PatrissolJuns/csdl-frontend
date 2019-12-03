import React, {Fragment, useState, useEffect} from "react";
import {
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView,
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    BackHandler
} from "react-native";
import {PanelColor} from "../conf";
import {Icon} from "react-native-elements";
import {
    getFolder,
    getFolders,
    getAntecedent,
    getSubFolders,
    getParentFolder,
    containtSubFolder, getFiles
} from "./../redux/selectors/folder";
import FolderItem from "./FolderItem";
import FolderItemContainer from "../redux/containers/FolderItemContainer";
import {fetchAllFoldersDB} from "../redux/actions/folderAction";
// import Store from './../redux/store';

const Home = (props) => {
    //console.log('props.action.fetchAllFoldersDB() = ',props.action.fetchAllFoldersDB());

    const [folders, setFolders] = useState([]);
    const [branchFolder, setBranchFolder] = useState(null);

    /*if(props.folders.length !== 0)
    {
        setFolders(props.folders)
    }*/
    useEffect(() => {

        props.actions.fetchAllFoldersDB().then(
            (_data) => {
                /*console.log('folders.length = ',folders.length);
                console.log('props.folders.length = ',props.folders.length);
                console.log('Store after = ',Store.getState());*/
                console.log('Store.getState().folders.length = ', getFolders().length);
                if(getFolders().length !== 0) {
                    setFolders(getFolders().filter(folder => folder.parent_id === null));
                }
            },
            (_error) => {
                console.log('_error = ',_error);
            }
        )
    }, []);

    BackHandler.addEventListener('hardwareBackPress', function() {
        // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
        // Typically you would use the navigator here to go to the last state. gvhjgvg
        console.log('folders.length = ',folders.length);
        if(folders.length === 0) {
            setFolders(getAntecedent(branchFolder));
        } else {
            let t = getAntecedent(folders[0]);
            if(t.length !== 0) setFolders(t);
        }

        return true;
    });

    const handleChangeFolder = (event, folder) => {
        event.preventDefault();
        if(!containtSubFolder(folder)) {
            setBranchFolder(folder);
        }
        setFolders(getSubFolders(folder))
    }
    /*if(props.folders.length !== 0)
    {
        let folder = getFolder(props.folders, 2);
        setFolders(props.folders);   dqsdqs
    }*/

    return (
        <SafeAreaView style={styles.header}>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
            >
                {folders.length !== 0
                    ? folders.map(folder =>
                        <FolderItem
                            key={folder.id}
                            folder={folder}
                            files={getFiles(folder)}
                            handleChange={(event) => handleChangeFolder(event, folder)}
                        />
                    )
                    : <Text>Loading ...</Text>
                }
                {/*<TouchableOpacity style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}>
                    <View>
                        <Icon
                            name='folder-o'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>Semestre 1</Text>
                        <Text style={{fontSize: 10}}>202 fichiers</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}>
                    <View>
                        <Icon
                            name='folder-o'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>Semestre 2</Text>
                        <Text style={{fontSize: 10}}>181 fichiers</Text>
                    </View>
                </TouchableOpacity>*/}


            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = {
    titles: {
        fontSize: 52,
        marginRight: 10
    },
    header : {
        //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10
    },
    imageStyle: {
        /*width: 100,
        height: 100,*/
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius:0,
        marginTop: 10,
        marginRight: 20,
        overflow: 'hidden',
        width: 280,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    Container: {
        flex: 1
    },
    WebViewStyle: {
        margin: 20
    }
}
