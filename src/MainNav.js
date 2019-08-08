import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Game from "./screens/Game"
import GameList from "./screens/GameList"
import NewGame from "./screens/NewGame"
import GameOptions from "./screens/gamescreens/GameOptions"
import Loading from "./components/Loading"
import UserAuth from "./screens/UserAuth"
import checkAuth from './utils/auth'

const gameNavigator = createStackNavigator({
    GameList: {
      screen: checkAuth(GameList)
    },
    GameOptions: {
      screen: checkAuth(GameOptions)
    },
    NewGame: {
      screen: checkAuth(NewGame)
    },
    Game: {
      screen: checkAuth(Game),
      navigationOptions: () => ({
       header: null
        // headerMode: 'none',
        // headerTransparent: true
      })
    }
}, {
 initialRouteName: "Game"
})

const AppNavigator = createDrawerNavigator({
    GameList: {
      screen: gameNavigator
    },
    Auth: {
      screen: UserAuth
    },
  }, {
    header: null,
    headerMode: 'none',
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  });


export default createAppContainer(AppNavigator);