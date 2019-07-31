import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Game from "./src/screens/Game"

const AppNavigator = createBottomTabNavigator({
  Game: {
    screen: Game
  }
});


export default createAppContainer(AppNavigator);