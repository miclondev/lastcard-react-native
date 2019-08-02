import React from 'react';
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Game from "./src/screens/Game"

const AppNavigator = createDrawerNavigator({
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