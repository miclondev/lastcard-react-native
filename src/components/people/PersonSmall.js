import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button, Avatar, ListItem } from "react-native-elements"
import { darkAccent, AccentLight, lightColor } from "../../functions/colors"
import TouchableScale from 'react-native-touchable-scale';
import { withNavigation } from "react-navigation"
import witAuth from "../../utils/auth"

class PersonSmall extends Component {

    press = () => {
        const { status, id, userId } = this.props
        if(status === "accepting challenge"){
            this.props.navigation.navigate("NewGame",{
                player1: userId,
                player2: id  
            })
        }
    }

    render() {
        const { name, status } = this.props
      //  console.log(this.props)
        return (
            <View style={{ marginBottom: 10 }}>
                <ListItem
                 Component={TouchableScale}
                 friction={90}
                 tension={100}
                 activeScale={0.95}
                leftAvatar={{
                    title: name[0],
                    source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" },
                    showEditButton: true,
                }}
                linearGradientProps={{
                    colors: [AccentLight, darkAccent],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                titleStyle={{ color: lightColor, fontWeight: 'bold' }}
                subtitleStyle={{ color: lightColor }}
                title={name}
                subtitle={status}
                rightElement={<Text style={{ color: lightColor}}>Level 1</Text>}
                chevron
                onPress={this.press}
                />
            </View>
        )
    }
}

export default withNavigation(witAuth(PersonSmall))

