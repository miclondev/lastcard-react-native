import React, { Component } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native-elements"

class Profile extends Component {
    render(){
//        console.log(this.props)
        return(
            <View>
                <Text>  Profile </Text>
                <View style={{ marginTop: 100 }}>
                        <Button
                            title="Log Out"
                            onPress={() => this.props.logOut()}
                        />
                </View>
            </View>
        )
    }
}

export default Profile