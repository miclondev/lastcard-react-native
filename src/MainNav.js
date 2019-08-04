import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Game from "./screens/Game"
import GameList from "./screens/GameList"
import UserAuth from "./screens/UserAuth"
import checkAuth from './utils/auth'

const AppNavigator = createDrawerNavigator({
    GameList: {
      screen: checkAuth(GameList)
    },
    Game: {
      screen: checkAuth(Game)
    },
    Auth: {
      screen: UserAuth
    },
  }, {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  });


export default createAppContainer(AppNavigator);