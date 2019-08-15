import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import CardBack from "../card/CardBack"
import Card from "../card/Card"
import { Query } from "react-apollo"
import getGame from "../../queries/game/getGame"

import cards from "../../data/cards.json"

class MidPlay extends Component {
    render(){
        return(
            <View>
                <Query 
                    query={getGame} 
                    variables={{ id: this.props.gameId }}
                    fetchPolicy="cache-first"
                >
                    {({ error, loading, data}) => {
                        if(error) console.log(error)
                        if(loading) return <Text>Loading....</Text>
                        console.log(data)

                        const { onPlay } = data.getGame
                        const lastPlayed = onPlay[onPlay.length-1]

                        return(
                            <View style={styles.main}>
                                <CardBack/>
                                    <Card
                                        value={cards[lastPlayed].value}
                                        suit={cards[lastPlayed].icon}
                                    />
                            </View>
                            )
                    }}
                    
                </Query>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})

export default MidPlay