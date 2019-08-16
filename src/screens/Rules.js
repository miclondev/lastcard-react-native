import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { darkColor, darkAccent  } from "../functions/colors"

class Rules extends Component {
    render(){
        return(
            <View style={styles.main}>
                <Text>  
                    Rules
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

export default Rules