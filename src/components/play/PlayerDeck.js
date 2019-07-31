import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import SingleCard from "../card/SingleCard"

class PlayerDeck extends Component {
     
    state = {
         selectedCards: [],
         myCards: [
            {value: 5, suit: 0, num: 0, order: 0},
            {value: 3, suit: 2, num: 1, order: 1},
            {value: 2, suit: 1, num: 2, order: 2},
            {value: 9, suit: 3, num: 3, order: 3},
            {value: 4, suit: 2, num: 4, order: 4},
            {value: 6, suit: 1, num: 5, order: 5},
            {value: 6, suit: 1, num: 6, order: 6},
            {value: 8, suit: 3, num: 7, order: 7},
            {value: 6, suit: 0, num: 8, order: 8},
            {value: 7, suit: 1, num: 9, order: 9}
        ],
        available: [
            {value: 5, suit: 0, num: 0, order: 0},
            {value: 3, suit: 2, num: 1, order: 1},
            {value: 2, suit: 1, num: 2, order: 2},
            {value: 9, suit: 3, num: 3, order: 3},
            {value: 4, suit: 2, num: 4, order: 4},
            {value: 6, suit: 1, num: 5, order: 5},
            {value: 4, suit: 1, num: 6, order: 6},
            {value: 8, suit: 3, num: 7, order: 7},
            {value: 6, suit: 0, num: 8, order: 8},
            {value: 7, suit: 1, num: 9, order: 9}
        ]
    }

    onSelectCard = (index) => {
            this.setState(prevState => {
                let card = prevState.myCards.findIndex(a => a.num === index)
                return {
                    myCards: prevState.myCards.filter(c => c.num !== index),
                    selectedCards: [...prevState.selectedCards, prevState.myCards[card]]
                 }
            }
        )
    }

    onDeSelectCard = (index) => {
        this.setState(prevState => {
                let card = prevState.selectedCards.findIndex(a => a.num === index)
                return {
                selectedCards: prevState.selectedCards.filter(c => c.num !== index),
                myCards: [...prevState.myCards, prevState.selectedCards[card]]
            }
            }
        )
    }

    onPlayCards = () => {
        const { selectedCards, available } = this.state
        let newAvail = [...available]
        if(selectedCards.length > 0){
            for(let i = 0; i < selectedCards.length; i++){
                let num = selectedCards[i].num
                newAvail.filter(c => c.num !== num)
            }
            this.setState({
                available: newAvail,
                selectedCards: []
            })
        }{
            console.log("please select cards")
        }
    }

    render(){
        console.log(this.state)
        return(
            <View style={styles.main}>
                <View style={styles.inner}>
                    {
                        this.state.available.map(c => <SingleCard 
                        value={c.value}
                        key={c.num}
                        suit={c.suit}
                        num={c.num}
                        onSelect={this.onSelectCard}
                        onDeSelect={this.onDeSelectCard}
                        absolute
                        />)
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
       // zIndex: 30,
    },
    inner: {
       marginTop: 100
    }
})



export default PlayerDeck
