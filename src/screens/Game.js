import React, { Component } from "react"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck" 
import BackDeck from "../components/play/BackDeck"
import MidPlay from "../components/play/MidPlay"
import { Feather } from '@expo/vector-icons';

import cardsDeck from "../data/cards.json"

const width = Dimensions.get('window').width


const IconTouch = ({ name, action })=> (
    <TouchableOpacity
        onPress={() => action()}
    ><Feather name={name} size={40} color="black" /></TouchableOpacity>
)

class Game extends Component {

    state = {
        canPlay: true,
        canSwitch: false,
        isActiveCards: false,
        availableCards: [],
        initialized: false,
        initialPlay: 4,
        players: 2,
        p1Cards: [],
        p2Cards: [],
        cardsOnPlay: []
    }

    onPressPlay = () => this.setState({ canPlay: !this.state.canPlay })
    onPressSwitch = () => this.setState({ canSwitch: !this.state.canSwitch})

    componentDidMount(){
        console.log("componentdidmount")
        if(this.state.availableCards.length === 0 && !this.state.initialized){            
            //shuffle cards
            const cards = this.shuffle(cardsDeck)
            this.setState({
                availableCards: cards,
                initialized: true
            }, () => {
                //initial card handOut
                this.initialCardHandOut()
            })
            
        }
        //sync with online
    }

    shuffle = (toShuffle) => {
        let cards = [...toShuffle]
        let m = cards.length, t, i
        while(m){
            i = Math.floor(Math.random() * m--)
            t = cards[m]
            cards[m] = cards[i]
            cards[i] = t
        }
        return cards
    } 

    initialCardHandOut = () => {
        const { initialPlay, availableCards, players } = this.state

        let player1Cards = []
        let player2Cards = []
        let onPlay = []
        let outCards = initialPlay*players
        let cards = [...availableCards]
        //console.log(player1Cards.length, player2Cards.length, cards.length )
        for(let i = 0; i < initialPlay; i++){
            player1Cards.push(cards[i])
            cards.splice(i, 1)
        }
        for(let i = 0; i < initialPlay; i++){
            player2Cards.push(cards[i])
            cards.splice(i, 1)
        }

        onPlay.push(cards[0])
        cards.splice(0, 1)

        //console.log(player1Cards.length, player2Cards.length, cards.length)

        this.setState({
            p1Cards: player1Cards,
            p2Cards: player2Cards,
            availableCards: cards,
            cardsOnPlay: onPlay
        })
    }

    render(){
       //console.log(this.state)
        const { p1Cards, p2Cards, cardsOnPlay, availableCards} = this.state

        return(
        <View style={styles.main}>
            <View style={styles.top}>
                <BackDeck cards={p2Cards}/>
            </View>

            <View style={styles.mid}>
                <MidPlay available={availableCards} onPlay={cardsOnPlay}/>
            </View>

            <View style={styles.bottom}>
                    <PlayerDeck cards={p1Cards}/>
            </View>
         
            <View style={styles.buttons}>

            <IconTouch name="check-square" action={this.props.navigation.toggleDrawer}/>

            <IconTouch name={this.state.canPlay ? "share" : "power"}
                 action={this.onPressPlay}/>

            <IconTouch name={this.state.canSwitch ? "toggle-left" : "toggle-right"}
                 action={this.onPressSwitch}/>

            </View>
       
        </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    top: {
       // backgroundColor: 'red',
        flex: 1
    },
    mid: {
        //backgroundColor: 'grey',
        flex: 1
    },
    bottom: {
        //backgroundColor: 'grey',
        flex: 1
    },
    buttons: {
        backgroundColor: 'white',
        height: 60,
        width: width,
        position: 'absolute',
        bottom: 0,
        //alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        opacity: .9
    }
})

export default Game