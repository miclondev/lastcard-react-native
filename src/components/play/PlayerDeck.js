import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import SingleCard from "../card/SingleCard"


const myCards = [
    {value: 5, suit: 0, num: 0},
    {value: 3, suit: 2, num: 1},
    {value: 2, suit: 1, num: 2},
    {value: 1, suit: 3, num: 3},
    {value: 4, suit: 2, num: 4},
    {value: 6, suit: 1, num: 5}
] 

class PlayerDeck extends Component {
     
    state = {
         cardCount: 4,
         selectedCards: []
    }

    render(){
        return(
            <View style={styles.main}>
                <View style={styles.inner}>
                {
                    myCards.map(c => <SingleCard 
                    value={c.value}
                    key={c.num}
                    suit={c.suit}
                    num={c.num}/>)
                }
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        //backgroundColor: 'grey',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: -200,
        zIndex: 30,
    },
    inner: {
       marginTop: 100
    }
})



export default PlayerDeck
