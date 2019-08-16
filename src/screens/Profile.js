import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { darkColor, darkAccent  } from "../functions/colors"
import { Button } from "react-native-elements"

class Profile extends Component {
    render(){
        return(
            <View style={styles.main}>
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

const styles = StyleSheet.create({
    main: {
        backgroundColor: darkColor,
        flex: 1
    }
})

export default Profile