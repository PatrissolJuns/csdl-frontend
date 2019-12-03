import React, {Fragment, useState} from "react";
import {StyleSheet, ScrollView, Text, View, TouchableHighlight, TouchableOpacity} from "react-native";
import {Button, Card, Icon, Image} from "react-native-elements";
import {PanelColor} from "../conf";
import { getSubFolders } from './../redux/selectors/folder';

const FolderItem = ({folder, files, handleChange, ...props}) => {
    const [isVisible, setIsVisible] = useState(false);

    console.log('files = ',files);

    const onPressVideo = () => {
        setIsVisible(!isVisible);
    }


    return (
        <Fragment>
            {folder !== undefined
                ? <TouchableOpacity
                        style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}
                        onPress={handleChange}
                    >
                    <View>
                        <Icon
                            name='folder-o'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>{folder.name}</Text>
                        <Text style={{fontSize: 10}}>{(getSubFolders(folder)).length} sub folders</Text>
                    </View>
                </TouchableOpacity>
                : null
            }
            {files !== undefined
                ? <TouchableOpacity
                    style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingTop: 5, paddingBottom: 5}}
                    onPress={handleChange}
                >
                    <View>
                        <Icon
                            name='file'
                            type='font-awesome'
                            size={30}
                            color = {PanelColor.SecondaryColor }
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 15}}>{files.name}</Text>
                        <Text style={{fontSize: 10}}>{files.size}</Text>
                    </View>
                </TouchableOpacity>
                : null
            }
        </Fragment>
    )
}

export default FolderItem;
