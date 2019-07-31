import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Game from "./src/screens/Game"

const AppNavigator = createStackNavigator({
  Game: {
    screen: Game
  }
});


export default createAppContainer(AppNavigator);