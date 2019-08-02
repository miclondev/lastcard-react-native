import React, { Component } from "react"
import {View, Text, StyleSheet, ScrollView } from "react-native"
import SingleCard from "../card/SingleCard"

import { graphql } from "react-apollo"
import getHand from "../../queries/player/getHand"
import cards from "../../data/cards.json"

class PlayerDeck extends Component {
     
    state = {
        loading: false
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
        console.log(this.props)
       // const { cards } = this.props
       // console.log(this.rotateDeg(2))
        return(
                <ScrollView contentContainerStyle={styles.main}
                horizontal={true}
                >
                    {/* <Text>My Cards</Text> */}
                    {
                       this.props.myCards.length > 0 && this.props.myCards.map((c, i) => <SingleCard 
                        value={cards[c].value}
                        key={cards[c].id}
                        suit={cards[c].icon}
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



export default graphql(getHand,{
    name: "playerHand",
    options : {
        variables: {
            id: "11c3027d-cf27-40d7-bfd4-914285b33aea"
        },
        fetchPolicy: "network-only"
    },
    props: props => ({
        myCards: props.playerHand.getHand ? props.playerHand.getHand.myCards : []
    })
})(PlayerDeck)
