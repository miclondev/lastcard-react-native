import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-elements"

class GameList extends Component {
    render(){
        return(
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text> Your Games </Text>
                    <Button> New Game</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        //flex: 1,
        marginTop: 60,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'

    }
})
export default GameList