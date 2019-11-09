import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

//tabs
import GameNav from './GameNav';
import ChallengeTabs from './ChallengeTabs';

//screens
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import TopList from '../screens/TopList';
import withAuth from '../utils/auth';
import { Icon } from 'react-native-elements';

//colors
import {
  darkAccent,
  AccentLight,
  lightAccent,
  lightColor
} from '../functions/colors';

const MainTabs = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: (
          <Icon
            name="face-profile"
            color={lightColor}
            type="material-community"
          />
        )
      })
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: () => ({
        tabBarIcon: (
          <Icon name="md-notifications" type="ionicon" color={lightColor} />
        )
      })
    },
    GameList: {
      screen: GameNav,
      navigationOptions: () => ({
        tabBarLabel: 'Game',
        tabBarIcon: (
          <Icon
            name="cards-playing-outline"
            type="material-community"
            color={lightColor}
          />
        )
      })
    },
    Challenge: {
      screen: ChallengeTabs,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="ios-people" color={lightColor} type="ionicon" />
      })
    },
    TopList: {
      screen: TopList,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="list" color={lightColor} />
      })
    }
  },
  {
    initialRouteName: 'GameList',
    header: null,
    headerMode: 'none',
    tabBarOptions: {
      activeBackgroundColor: AccentLight,
      inactiveBackgroundColor: darkAccent,
      activeTintColor: lightColor,
      inactiveTintColor: lightAccent,
      style: {
        borderTopColor: darkAccent
      }
    }
  }
);

export default MainTabs;
