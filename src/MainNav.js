import { createAppContainer, createSwitchNavigator } from "react-navigation";
import UserAuth from "./screens/UserAuth"
import MainTabs from "./nav/MainTabs"

const AppNavigator = createSwitchNavigator({
    Main: {
      screen: MainTabs
    },
    Auth: {
      screen: UserAuth
    },
  });


export default createAppContainer(AppNavigator);