import React, { Component } from "react"
import {View, Text, StyleSheet, ScrollView } from "react-native"
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

    // rotateDeg = num => {
    //     let total = this.state.available.length
    //     let mid = total/2
    //     if(num === mid) return 0
    //     if(num > mid){
    //         return num + 3
    //     }else {
    //         return num * -2
    //     }
    // }

    render(){
        console.log(this.props)
        const { cards } = this.props
       // console.log(this.rotateDeg(2))
        return(
            
                <ScrollView contentContainerStyle={styles.main}
                horizontal={true}
                >
                    {/* <Text>My Cards</Text> */}
                    {
                       cards.length > 0 && cards.map((c, i) => <SingleCard 
                        value={c.value}
                        key={c.id}
                        suit={c.icon}
                        num={i}
                        onSelect={this.onSelectCard}
                        onDeSelect={this.onDeSelectCard}
                        // deg={this.rotateDeg(i)}
                        // index={i}
                        />)
                    }
              </ScrollView>
         
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
       // backgroundColor: 'blue',
        width: 800,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
    }
})



export default PlayerDeck
