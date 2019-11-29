import React, {Fragment, useState} from "react";
import {StyleSheet, ScrollView, Text, View, TouchableHighlight} from "react-native";
import {Button, Card, Icon, Image} from "react-native-elements";
import { RecipeCard } from './Food/AppStyles'
import ShowVideo from './ShowVideo';

/*class VideoItem extends React.Component{

    constructor(props) {
        super(props);
        this.setState({
            isVisible: false,
            item: props.item
        });
        console.log("item._id = ",props.item._id);
    }

    render() {
        return (
            <Fragment>
                {this.item !== undefined
                    ? <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'>
                        <Text style={{color: 'blue'}}>{this.item._id}</Text>
                    </TouchableHighlight>
                    : null
                }
            </Fragment>
        );
    }
}*/

const VideoItem = ({item, ...props}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onPressVideo = () => {
        setIsVisible(!isVisible);
    }

    console.log("item._id = ", item._id);
    return (
        <Fragment>
            {item !== undefined
                ? <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressVideo()}>>

                    <View style={styles.container}>
                        <Image style={styles.photo} source={{ uri: item.image.url }} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>

                    {/*<Text>juns</Text>*/}

                    {/*{isVisible && <ShowVideo video={item} />}*/}
                </TouchableHighlight>
                : null
            }
        </Fragment>
    )
}


const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category
});

export default VideoItem;

{/*<TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressVideo(video)}>*/}

{/*props !== undefined
    ? <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'>

        <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.container}>
            <Image style={styles.photo} source={{uri: props.image.url}}/>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <Card
            title='HELLO WORLD'
            image={require('./../assets/opening_2.png')}>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
        </Card>
        {isVisible && <ShowVideo video={video} />}
    </TouchableHighlight>
    : null
*/}