import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck"
import BackDeck from "../components/play/BackDeck"
import MidPlay from "../components/play/MidPlay"

import Loading from "../components/Loading"

import { Query } from "react-apollo"
import getGame from "../queries/game/getGame"

const width = Dimensions.get('window').width

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
        loading: true
    }

    onPressPlay = () => this.setState({ canPlay: !this.state.canPlay })

    onPressSwitch = () => this.setState({ canSwitch: !this.state.canSwitch })

    async componentDidMount() {
        console.log("componentdidmount")
    }

    render() {
        //console.log(this.props.currentGame)
        const { navigation } = this.props;
        const gameId = navigation.getParam('gameId', "e35a5ec6-a6a0-4e3a-bc00-0048e12cf1d1");

        return (
            <Query query={getGame} variables={{id: gameId}}>
                {({ error, loading, data }) => {
                    if (loading) return <Loading/>
                    return (
                        <View style={styles.main}>

                            <View style={styles.top}>
                                <BackDeck gameId={gameId} />
                            </View>

                            <View style={styles.mid}>
                                <MidPlay gameId={gameId} />
                            </View>

                            <View style={styles.bottom}>
                                <PlayerDeck gameId={gameId} />
                            </View>
                        </View>
                    )
                }}
            </Query>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: '#2E2633'
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

    topBar:{
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width,
        height: 60,
        paddingLeft: 10,
        paddingRight:10
    }
})

export default Game

