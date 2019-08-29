
import { createStackNavigator } from "react-navigation"
import Game from "../screens/Game"
import GameList from "../screens/GameList"
import NewGame from "../screens/NewGame"
import GameOptions from "../screens/gamescreens/GameOptions"

import checkAuth from "../utils/auth"

const GameNavigator = createStackNavigator({
    GameList: {
      screen: checkAuth(GameList),
      navigationOptions: () => ({
        header: null
     })
    },
    GameOptions: {
      screen: checkAuth(GameOptions),
      navigationOptions: () => ({
        // header: null,
         tabBarVisible: false,
          // headerMode: 'none',
          headerTransparent: true
        })
    },
    NewGame: {
      screen: checkAuth(NewGame),
      navigationOptions: () => ({
        // header: null,
         tabBarVisible: false,
          // headerMode: 'none',
          headerTransparent: true
        })
    },
    Game: {
      screen: checkAuth(Game),
      navigationOptions: () => ({
      // header: null,
       tabBarVisible: false,
        // headerMode: 'none',
        headerTransparent: true
      })
    }
}, {
  //initialRouteName: "Game", 
  navigationOptions: ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      cardStyle: {
        backgoundColor: "#2E2633"
      }
    };
  }
})

export default GameNavigator