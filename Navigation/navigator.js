// Navigation/Navigation.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Favouris from '../Components/Favourite';
import { Icon } from 'react-native-elements';
import Search from "../Components/Search";
import Home from "../Components/Home";
import HomeContainer from "../redux/containers/HomeContainer";
import VideoManageContainer from "../redux/containers/VideoManageContainer";
import { PanelColor } from  './../conf'

/*const TestListStackNavigator = createStackNavigator({
    Favouris: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Favouris,
        navigationOptions: {
            title: 'Favouris'
        }
    },
    TestList: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: TestList,
        navigationOptions: {
            title: 'My lists'
        }
    }

})*/

const MoviesTabNavigator = createBottomTabNavigator(
    {
            Accueil: {
                screen: Home,
                navigationOptions: {
                    tabBarIcon: () => {
                        return <Icon
                                    name ='home'
                                    type ='font-awesome'
                                    color = { PanelColor.PrimaryColor }
                                />
                    }
                }

            },
            Favoris: {
                screen: Favouris,
                navigationOptions: {
                    tabBarIcon: () => {
                        return <Icon
                            name='star'
                            type='font-awesome'
                            color = { PanelColor.PrimaryColor }
                        />
                    }
                }
            },
            Ajouter: {
                screen: VideoManageContainer,
                navigationOptions: {
                    tabBarIcon: () => {
                        return <Icon
                            name="plus-circle"
                            type="font-awesome"
                            color = { PanelColor.PrimaryColor }
                        />
                    }
                }
            }
        },
    {
            tabBarOptions: {
                //activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
                //inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
                showLabel: true, // On masque les titres
                showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis,
                activeTintColor: PanelColor.PrimaryColor,
                inactiveTintColor: 'gray'
            }
        }
)

export default createAppContainer(MoviesTabNavigator)
