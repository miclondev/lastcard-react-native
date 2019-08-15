import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button, Icon } from "react-native-elements"
import { Query, graphql, compose } from "react-apollo"
import Loading from "../../components/Loading"

import getGame from "../../queries/game/getGame"
import updateGame from "../../mutations/updateGame"
import createHand from "../../mutations/createHand"
import cardDeck from "../../data/cards.json"

class GameOptions extends Component {

    state = {
        message: "invite player to game",
        player1Create: false,
        player2Create: false,
        gameUpate: false
    }

    gotoGame = async () => {
        const { id, started } = this.props.game
        if (started) {
            console.log("started")
            //navigate if game already started
            this.props.navigation.navigate("Game", {
                gameId: id
            })
        } else {
            await this.initialCardHandOut()
            this.props.navigation.navigate("Game", {
                gameId: id
            })
        }
    }

    initialCardHandOut = async () => {
        const { game } = this.props
        const { players } = game
        const initialPlay = 4
        let player1Cards = []
        let player2Cards = []
        let onPlay = []
        let remainingCards = []
        let cards = this.shuffle(cardDeck)
        for (let i = 0; i < initialPlay; i++) {
            player1Cards.push(cards[i].id)
            cards.splice(i, 1)
        }

        for (let i = 0; i < initialPlay; i++) {
            player2Cards.push(cards[i].id)
            cards.splice(i, 1)
        }
        onPlay.push(cards[0].id)
        cards.splice(0, 1)
        for (let i = 0; i < cards.length; i++) {
            remainingCards.push(cards[i].id)
        }

        console.log({
            game: game.id,
            gameId: game.id,
            user: players[0],
            number: 1,
            cards: player1Cards
        })

        await this.props.createHand({
            variables: {
                game: game.id,
                gameId: game.id,
                user: players[0],
                number: 1,
                cards: player1Cards
            }
        }).then(res => {
            console.log(res)
            this.setState({player1Create: true})
        })

        await this.props.createHand({
            variables: {
                game: game.id,
                gameId: game.id,
                user: players[1],
                number: 2,
                cards: player2Cards
            }
        }).then(res => {
            console.log(res)
            this.setState({player2Create: true})
        })

        await this.props.updateGame({
            variables: {
                id: game.id,
                cards: remainingCards,
                onPlay,
                started: true
            }
        })
        .then(res => {
            this.setState({ loading: false, gameUpate: true })
        })
    }

    shuffle = (toShuffle) => {
        let cards = [...toShuffle]
        let m = cards.length, t, i
        while (m) {
            i = Math.floor(Math.random() * m--)
            t = cards[m]
            cards[m] = cards[i]
            cards[i] = t
        }
        return cards
    }

    render() {
       // console.log("game", this.props.game)
        const { game } = this.props

        //console.log(game)

        return (
            <View style={styles.body}>

                <View style={styles.main}>
               
                    <Button
                        containerStyle={styles.button}
                        icon={
                            <Icon
                                name="keyboard-capslock"
                                size={15}
                                color="white"
                            />
                        }
                        buttonStyle={{
                            backgroundColor: '#99173C'
                        }}
                        titleStyle={{
                            color: '#EFFFCD'
                        }}
                        title={game.started ? "Continue Game" : "Start Game"}
                        raised
                        onPress={() => this.gotoGame(game.gameStarted, game.id)}
                    />

                    <Text>
                        {this.state.message}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#2E2633',
        flex: 1,
        paddingTop: 70
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
    graphql(updateGame, {
        name: "updateGame"
    }),
    graphql(getGame, {
        name: "getGame",
        options: props => {
            const { navigation } = props;
            const id = navigation.getParam('gameId', '6b63d5ca-7822-442b-91f2-4b3bc88da22d');
            return {
                variables: { id }
            }
        },
        props: props => ({
            loading: props.getGame.loading,
            game: props.getGame.getGame ? props.getGame.getGame : {}
        })
    })
)(GameOptions)