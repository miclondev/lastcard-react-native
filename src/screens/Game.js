import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck" 
import BackDeck from "../components/play/BackDeck"
import SingleCard from "../components/card/SingleCard"

class Game extends Component {
    render(){
        return(
        <View style={styles.main}>
           <BackDeck/>
            
            <View>
                <SingleCard
                    value={5}
                    suit={3}
                    num={1}
                    noAction
                />
            </View>

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