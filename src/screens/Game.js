import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck"
import BackDeck from "../components/play/BackDeck"
import MidPlay from "../components/play/MidPlay"
import { Feather, Entypo } from '@expo/vector-icons';
import Loading from "../components/Loading"

import { Query } from "react-apollo"
import getGame from "../queries/game/getGame"

const width = Dimensions.get('window').width


const IconTouch = ({ name, action }) => (
    <TouchableOpacity
        onPress={() => action()}
    >
        <Feather name={name} size={40} color="#FDE375" />
    </TouchableOpacity>
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

                            <View style={styles.topBar}>
                                    <Entypo name="circle-with-cross" size={52} color="#FDE375" />
                                    <Entypo name="message" size={52} color="#FDE375" />
                            </View>

                            <View style={styles.buttons}>

                                <IconTouch name="check-square" action={this.props.logOut} />

                                <IconTouch name={this.state.canPlay ? "share" : "power"}
                                    action={this.onPressPlay} />

                                <IconTouch name={this.state.canSwitch ? "toggle-left" : "toggle-right"}
                                    action={this.onPressSwitch} />
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
        backgroundColor: '#252833'
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
        backgroundColor: '#252833',
        height: 60,
        width,
        position: 'absolute',
        bottom: 0,
        //alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
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

