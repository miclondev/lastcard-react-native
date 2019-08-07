import React, { Component } from "react"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck" 
import BackDeck from "../components/play/BackDeck"
import MidPlay from "../components/play/MidPlay"
import { Feather } from '@expo/vector-icons';

import cardsDeck from "../data/cards.json"

import { graphql, compose } from "react-apollo"
import getGame from "../queries/game/getGame"
import createHand from "../mutations/createHand"
import updateGame from "../mutations/updateGame"
//import checkAuth from "../utils/auth"

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
        cardsOnPlay: [],
        loading: false
    }

    onPressPlay = () => this.setState({ canPlay: !this.state.canPlay })
    onPressSwitch = () => this.setState({ canSwitch: !this.state.canSwitch})

    async componentDidMount  (){

        console.log("componentdidmount")
        
        if(this.state.availableCards.length === 0 && !this.state.initialized){            
            //shuffle cards
            const cards = this.shuffle(cardsDeck)
            this.setState({
                availableCards: cards,
                initialized: true
            }, () => {
                //initial card handOut
              //  this.initialCardHandOut()
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

    initialCardHandOut = async () => {

        const { initialPlay, availableCards } = this.state
        let player1Cards = []
        let player2Cards = []
        let onPlay = []

        let cards = [...availableCards]

        for(let i = 0; i < initialPlay; i++){
            player1Cards.push(cards[i].id)
            cards.splice(i, 1)
        }

        for(let i = 0; i < initialPlay; i++){
            player2Cards.push(cards[i].id)
            cards.splice(i, 1)
        }

        onPlay.push(cards[0].id)

        cards.splice(0, 1)

        let remainingCards = []
        
        for(let i=0; i< cards.length; i++){
            remainingCards.push(cards[i].id)
        }

       await this.props.createHand({
            variables:{
                game: 'game-id-123434',
                gameId: "game-id014423",
                user: 'user-1',
                number: 1,
                cards: player1Cards
            }
        })
        //.then(res => console.log(res))

      await this.props.createHand({
            variables:{
                game: 'game-id-123434',
                gameId: "game-id014423",
                user: 'user-2',
                number: 2,
                cards: player2Cards
            }
        })
        //.then(res => console.log(res))

      await this.props.updateGame({
            variables:{
                id: "item-test-1",
                cards: remainingCards,
                onPlay,
                started: true
            }
        })
        //.then(res => console.log(res))

        this.setState({ loading: false })
    }


    render(){
      //console.log(this.props)
        const { navigation } = this.props;
        const gameId = navigation.getParam('gameId', "e35a5ec6-a6a0-4e3a-bc00-0048e12cf1d1");

        return(
        <View style={styles.main}>

            <View style={styles.top}>
                <BackDeck gameId={gameId}/>
            </View>

            <View style={styles.mid}>
                <MidPlay/>
            </View>

            <View style={styles.bottom}>
                    <PlayerDeck gameId={gameId}/>
            </View>
         
            <View style={styles.buttons}>

            <IconTouch name="check-square" action={this.props.logOut}/>

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

export default compose(
    graphql(getGame,{
    name: "currentGame",
    options: props => {
        const { navigation } = props;
        const itemId = navigation.getParam('gameId', "e35a5ec6-a6a0-4e3a-bc00-0048e12cf1d1");

        console.log(itemId)

        return { 
            variables: { id: itemId },
            fetchPolicy: "network-only"
        }
    }
    }),
    graphql(createHand, {
        name: "createHand"
    }),
    graphql(updateGame,{
        name: "updateGame"
    })
)(Game)