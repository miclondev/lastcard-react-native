import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { darkColor, darkAccent  } from "../functions/colors"

class Notifications extends Component {
    render(){
        return(
            <View style={styles.main}>
                <Text>  
                    Notifications
                </Text>
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

export default Notifications