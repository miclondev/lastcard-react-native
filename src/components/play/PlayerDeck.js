import React, { Component } from "react"
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import SingleCard from "../card/SingleCard"

import {  withApollo } from "react-apollo"
import getHand from "../../queries/player/getHand"
import cards from "../../data/cards.json"


import {  Entypo } from '@expo/vector-icons';

const width = Dimensions.get('window').width

class PlayerDeck extends Component {
     
    state = {
        action: "Select Cards",
        loading: false,
        myCards: [],
        selectedCards: [],
        currentCards: [],
        sort: false
    }

    componentDidMount(){
        if(this.state.myCards.length === 0) { 
            this.getCurrentCards()
        }
    }


    onPressAction = () => {
        const { action } = this.state

        if(action === "Sort Cards"){
            this.setState({ sort: !this.state.sort, action: "Play Cards" })
        }
        
        if(action === "Play Cards"){
            //play cards
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
                    selectedCards,
                    action: "Sort Cards"
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
       //console.log(this.state)
       // const { cards } = this.props
       let data = []
       if(this.state.sort){
            data = this.state.selectedCards
       }else{
           data = this.state.myCards
       }
       
        return(
            <View style={{ flex:1}}>
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
                        
                </ScrollView>





                <View style={styles.buttons}>
                                <Entypo name="message" size={40} color="#EFFFCD" />
                                
                                <TouchableOpacity style={styles.action} onPress={() => this.onPressAction()}>
                                    <Text style={styles.actionText}>{this.state.action}</Text>
                                </TouchableOpacity>

                                <Entypo name="message" size={40} color="#EFFFCD" />
                </View>



              </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        //backgroundColor: 'blue',
        width: 800
    },
    buttons: {
        backgroundColor: '#2E2633',
        height: 60,
        width,
        position: 'absolute',
        bottom: 0,
        //alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    action: {
        backgroundColor: "#99173C",
        width: 170,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    actionText: {
        color: 'white',
        fontWeight: '400'
    }
})



export default withApollo(PlayerDeck)
