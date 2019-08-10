import { createBottomTabNavigator } from "react-navigation"

import Profile from "../screens/Profile"
import GameNav from "./GameNav"
import Notifications from "../screens/Notifications"
import Friends from "../screens/Friends"
import TopList from "../screens/TopList"
import withAuth from "../utils/auth"

const MainTabs = createBottomTabNavigator({
    Friends: {
        screen: Friends
    },
    TopList: {
        screen: TopList
    },
    GameList: {
        screen: GameNav,
        navigationOptions: () => ({
            tabBarLabel: 'Game',
            
         })
    },
    Notifications: {
        screen: Notifications
    },
    Profile: {
        screen: withAuth(Profile)
    },
}, {
    initialRouteName: "GameList",
    header: null,
    headerMode: 'none',
    tabBarOptions: {
        activeBackgroundColor: '#cc2151',
        inactiveBackgroundColor: '#99173C',
        activeTintColor: '#EFFFCD',
        inactiveTintColor: '#EFFFCD'
    }
})

export default MainTabs