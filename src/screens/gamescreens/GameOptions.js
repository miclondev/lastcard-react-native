import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button, Icon } from "react-native-elements"
import { Query, graphql, compose } from "react-apollo"
import Loading from "../../components/Loading"

import getGame from "../../queries/game/getGame"
import updateGame from "../../mutations/updateGame"
import createHand from "../../mutations/createGame"
import cardDeck from "../../data/cards.json"

class GameOptions extends Component {

    state = {
        message: "invite player to game"
    }


    gotoGame = (id, started) => {
        if(started){
            this.props.navigation.navigate("Game",{
                gameId: id
            })
        }else{
            //check there is more than one player

            if(this.checkPlayers() > 1){


            }else{
                this.setState({
                    message: "Plase Invite Player to game"
                })
            }
            
        }
    }


    checkPlayers = () => 2

        initialCardHandOut = async (gameId) => {

            const initialPlay = 4
            let player1Cards = []
            let player2Cards = []
            let onPlay = []
            let remainingCards = []

            let cards = this.shuffle(cardDeck)
    
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
            
            for(let i=0; i< cards.length; i++){
                remainingCards.push(cards[i].id)
            }
    
           await this.props.createHand({
                variables:{
                    game: gameId,
                    gameId: "game-id014423",
                    user: 'user-1',
                    number: 1,
                    cards: player1Cards
                }
            })
            //.then(res => console.log(res))
    
          await this.props.createHand({
                variables:{
                    game: gameId,
                    gameId: gameId,
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
    
    render() {
        const { navigation } = this.props;
        const gameId = navigation.getParam('gameId', "e35a5ec6-a6a0-4e3a-bc00-0048e12cf1d1");


        
        
        return (
            <View style={styles.body}>
                <Query query={getGame} variables={{ id: gameId }}>
                    {({ error, loading, data }) => {
                        console.log(error)
                        if (loading) return <Loading/>
                        console.log(data)
                        
                        const { getGame } = data
                        const gameStarted = getGame.started || false

                        return (
                            <View style={styles.main}>
                                <View>

                                </View>

                                <Button
                                    containerStyle={styles.button}
                                    icon={
                                        <Icon
                                            name="grid-on"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    title="Invite Opponent"
                                    raised
                                />

                                <Button
                                    containerStyle={styles.button}
                                    icon={
                                        <Icon
                                            name="keyboard-capslock"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    title={gameStarted ? "Continue Game" : "Start Game"}
                                    raised
                                    onPress={() => this.gotoGame(gameStarted, getGame.id)}
                                />

                                <Text>
                                    {this.state.message}
                                </Text>
                            </View>
                        )
                    }}

                </Query>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#2E2633',
        flex: 1
    },
    main: {
        flexDirection: "column",
        //flex: 2,
        alignItems: "stretch",
        justifyContent: "space-around",
        padding: 20,
        //height: 500
        backgroundColor: '#2E2633',
    },
    button: {
        marginBottom: 50
    }
})


export default compose(
    graphql(createHand, {
        name: "createHand"
    }),
    graphql(updateGame,{
        name: "updateGame"
    })

)(GameOptions)