import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import CardBack from "../card/CardBack"

class BackDeck extends Component {
    render(){
        return(
                <View style={styles.cards}>
                    <CardBack rotate={0} style={styles.card} id={1} key={1}/>
                    <CardBack rotate={0} style={styles.card} id={2} key={2}/>
                    <CardBack rotate={0} style={styles.card} id={3} key={3}/>
                    <CardBack rotate={0} style={styles.card} id={4} key={4}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    
    cards: {
        flexDirection: "row",
        //backgroundColor: 'red',
        flex: 1
        },
    card: {
        position: "absolute",
        left: 24,
       
    }
})

export default BackDeck