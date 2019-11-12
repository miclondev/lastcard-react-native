import { createStackNavigator, createAppContainer } from 'react-navigation';
import Game from '../screens/Game';
import GameList from '../screens/GameList';
import NewGame from '../screens/NewGame';
import GameOptions from '../screens/gamescreens/GameOptions';

import checkAuth from '../utils/auth';

const GameNavigator = createStackNavigator(
  {
    GameList: {
      screen: GameList,
      navigationOptions: () => ({
        header: null
      })
    },
    GameOptions: {
      screen: GameOptions,
      navigationOptions: () => ({
        // header: null,
        tabBarVisible: false,
        // headerMode: 'none',
        headerTransparent: true
      })
    },
    NewGame: {
      screen: NewGame,
      navigationOptions: () => ({
        // header: null,
        tabBarVisible: false,
        // headerMode: 'none',
        headerTransparent: true
      })
    },
    Game: {
      screen: Game,
      navigationOptions: () => ({
        // header: null,
        tabBarVisible: false,
        // headerMode: 'none',
        headerTransparent: true
      })
    }
  },
  {
    //initialRouteName: "Game",
    navigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible,
        cardStyle: {
          backgoundColor: '#2E2633'
        }
      };
    }
  }
);

export default createAppContainer(GameNavigator);
