import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import SingleCard from "../card/SingleCard"

import { withApollo } from "react-apollo"
import getHand from "../../queries/player/getHand"
import cards from "../../data/cards.json"

import { Entypo } from '@expo/vector-icons';


import { onSelectCard } from "../../functions/playCards"

const width = Dimensions.get('window').width

class PlayerDeck extends Component {

    state = {
        action: "Select Cards",
        loading: false,
        myCards: [],
        selectedCards: [],
        currentCards: [],
        sort: false,
        message: undefined
    }

    componentDidMount() {
        this.getCurrentCards()
    }

    onPressAction = () => {
        const { action } = this.state

        if (action === "Sort Cards") {
            this.setState({ sort: !this.state.sort, action: "Play Cards" })
        }

        if (action === "Play Cards") {
            //play cards
        }
    }

    getCurrentCards = () => {
        console.log(this.props.userId)
        this.props.client.query({
            query: getHand,
            variables: {
                game: this.props.gameId,
                user: this.props.user
            }
        }).then(res => {
            //console.log(res)
            const { myCards } = res.data.handsByGame.items[0]
            this.setState({
                myCards,
                currentCards: myCards
            })
        })
    }


    canSelect = (num) => {
        let currentSelect = [...this.state.selectedCards]
        if (currentSelect.length === 0) {
            return true
        } else {
            let can = onSelectCard(num, currentSelect)
            return can
        }
    }

    onSelectCard = (num) => {
        let currentSelect = [...this.state.selectedCards]
        let cardsOnHand = [...this.state.myCards]
        let card = cardsOnHand.findIndex(a => a === num)
        let canSelect = onSelectCard(num, currentSelect)
        console.log(canSelect)
        if (canSelect || currentSelect.length === 0) {
            console.log("selected")
            cardsOnHand.splice(card, 1)
            currentSelect.push(num)
            this.setState({
                myCards: cardsOnHand,
                selectedCards: currentSelect
            })
        } else {
            this.setState({ message: "select card with same number or suit" })
        }
    }

    onDeSelectCard = (num) => {
        let currentSelect = [...this.state.selectedCards]
        let cardsOnHand = [...this.state.myCards]
        let card = currentSelect.findIndex(a => a === num)
        currentSelect.splice(card, 1)
        cardsOnHand.push(num)

        this.setState({
            myCards: cardsOnHand,
            selectedCards: currentSelect
        })
    }

    onPlayCards = () => {
        const { selectedCards, available } = this.state
        let newAvail = [...available]
        if (selectedCards.length > 0) {
            for (let i = 0; i < selectedCards.length; i++) {
                let num = selectedCards[i].num
                newAvail.filter(c => c.num !== num)
            }
            this.setState({
                available: newAvail,
                selectedCards: []
            })
        } {
            console.log("please select cards")
        }
    }

    render() {
        //console.log(this.state)
        // const { cards } = this.props
        let data = []
        if (this.state.sort) {
            data = this.state.selectedCards
        } else {
            data = this.state.myCards
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.main}
                    horizontal={true}
                >
                    {
                        this.state.currentCards.map((c, i) => (
                            <SingleCard
                                value={cards[c].value}
                                key={i}
                                suit={cards[c].icon}
                                num={i}
                                c={c}
                                canSelect={this.canSelect}
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
