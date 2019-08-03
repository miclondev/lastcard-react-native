import React, { Component } from "react"
import {View, Text, StyleSheet, ScrollView } from "react-native"
import SingleCard from "../card/SingleCard"

import { graphql, Query, withApollo } from "react-apollo"
import getHand from "../../queries/player/getHand"
import cards from "../../data/cards.json"

class PlayerDeck extends Component {
     
    state = {
        loading: false,
        myCards: [],
        selectedCards: [],
        currentCards: []
    }

    componentDidMount(){
        if(this.state.myCards.length === 0) { 
            this.getCurrentCards()
        }
    }

    getCurrentCards = () => {
        this.props.client.query({
            query: getHand,
            variables: {
                id: "11c3027d-cf27-40d7-bfd4-914285b33aea"
            }
        }).then(res => this.setState({
            myCards: res.data.getHand.myCards,
            currentCards: res.data.getHand.myCards
        }))
    }

    onSelectCard = (num) => {
            this.setState(prevState => {
                let card = prevState.myCards.findIndex(a => a === num)
                let cards = [...prevState.myCards]
                cards.splice(card, 1)
                let selectedCards = [...prevState.selectedCards, num]
                return {
                    myCards: cards,
                    selectedCards
                 }
            }
        )
    }

    onDeSelectCard = (num) => {
        this.setState(prevState => {
                let card = prevState.selectedCards.findIndex(a => a === num)
                let selectedCards = [...prevState.selectedCards]
                selectedCards.splice(card, 1)
                let cards = [prevState.myCards, num]
                return {
                    selectedCards,
                    myCards: cards
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
       // const { cards } = this.props
       
        return(
                <ScrollView contentContainerStyle={styles.main}
                horizontal={true}
                >
                            
                                {
                                    this.state.currentCards.map((c, i) =>( 
                                            <SingleCard 
                                                value={cards[c].value}
                                                key={i}
                                                suit={cards[c].icon}
                                                num={i}
                                                c={c}
                                                onSelect={this.onSelectCard}
                                                onDeSelect={this.onDeSelectCard}
                                            />
                                        )
                                    )
                                }
                           
                    
                    {/* <Text>My Cards</Text> */}
                     
                    
              </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        //backgroundColor: 'blue',
        width: 800
    }
})



export default withApollo(PlayerDeck)
