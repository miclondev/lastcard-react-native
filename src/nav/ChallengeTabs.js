import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import OnlineNow from '../screens/challenge/OnlineNow';
import ContactList from '../screens/challenge/ContactList';

const ChallengeTabs = createMaterialTopTabNavigator(
  {
    OnlineNow: {
      screen: OnlineNow,
      navigationOptions: () => ({
        tabBarLabel: 'Online Now'
      })
    },
    Contacts: {
      screen: ContactList,
      navigationOptions: () => ({
        tabBarLabel: 'From Contacts'
      })
    }
  },
  {
    //initialRouteName: "Contacts",
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#99173C',
        paddingTop: 30
      }
    }
  }
);

export default ChallengeTabs;
