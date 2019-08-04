import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Game from "./screens/Game"
import GameList from "./screens/GameList"
import UserAuth from "./screens/UserAuth"

const AppNavigator = createDrawerNavigator({
    auth: {
      screen: UserAuth
    },
    GameList: {
      screen: GameList
    },
    Game: {
      screen: Game
    }
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