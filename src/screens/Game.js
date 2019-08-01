import React, { Component } from "react"
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native"
import PlayerDeck from "../components/play/PlayerDeck" 
import BackDeck from "../components/play/BackDeck"
import SingleCard from "../components/card/SingleCard"
import { Feather } from '@expo/vector-icons';

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
        isActiveCards: false
    }

    onPressPlay = () => this.setState({ canPlay: !this.state.canPlay })
    onPressSwitch = () => this.setState({ canSwitch: !this.state.canSwitch})

    render(){
        return(
        <View style={styles.main}>
            <View style={styles.top}>
                <BackDeck/>
            </View>

            <View style={styles.mid}>
                <Text> Mid</Text>
            </View>

            <View style={styles.bottom}>
                    <PlayerDeck/>
            </View>
         
            <View style={styles.buttons}>

            <IconTouch name="check-square"/>

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
        //backgroundColor: 'black',
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