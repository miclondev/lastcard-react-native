import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck" 
import BackDeck from "../components/play/BackDeck"

class Game extends Component {
    render(){
        return(
        <View style={styles.main}>
           <BackDeck/>
           <PlayerDeck/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})

export default Game