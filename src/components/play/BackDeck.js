import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class BackDeck extends Component {
    render(){
        return(
            <View style={styles.main}>
                <Text>BACKDECK</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center"
    }
})

export default BackDeck