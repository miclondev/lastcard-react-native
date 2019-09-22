import React, { useContext } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck"
import BackDeck from "../components/play/BackDeck"
import MidPlay from "../components/play/MidPlay"

import Loading from "../components/Loading"

import colors, { darkColor, darkAccent } from "../functions/colors"

import { ThemeContext } from "../context/ThemeContext"
import { GameProvider } from "../context/GameContext"
import { UserContext } from "../context/UserContext"


const width = Dimensions.get('window').width

function Game(props) {

    const { theme } = useContext(ThemeContext)
    const { loggedIn } = useContext(UserContext)

    console.log(thme)

    //console.log(this.props.currentGame)
    const { navigation } = this.props;

    const id = navigation.getParam('gameId', 'b0386190-1874-40e9-8c11-545b592d507c');

    // console.log(id)

    return (
        <GameProvider>
            loggedIn ? <View style={{ ...styles.main, backgroundColor: colors[theme].darkColor }}>
                <View style={styles.top}>
                    <BackDeck gameId={id} />
                </View>

                <View style={styles.mid}>
                    <MidPlay gameId={id} />
                </View>

                <View style={styles.bottom}>
                    <PlayerDeck gameId={id} user={this.props.userId} />
                </View>
            </View> :
            <Loading />
        </GameProvider>
    )
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
    topBar: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width,
        height: 60,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Game

