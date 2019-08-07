import { createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import Game from "./screens/Game"
import GameList from "./screens/GameList"
import NewGame from "./screens/NewGame"

import UserAuth from "./screens/UserAuth"
import checkAuth from './utils/auth'

const gameNavigator = createStackNavigator({
    GameList: {
      screen: checkAuth(GameList)
    },
    NewGame: {
      screen: checkAuth(NewGame)
    },
    Game: {
      screen: checkAuth(Game)
    }
}, {
 // initialRouteName: "NewGame"
})

const AppNavigator = createDrawerNavigator({
    GameList: {
      screen: gameNavigator
    },
    Auth: {
      screen: UserAuth
    },
  }, {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  });


export default createAppContainer(AppNavigator);