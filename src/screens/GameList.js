import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Button, ListItem } from "react-native-elements"

import { Query } from "react-apollo"
import getUserGames from "../queries/game/getUserGames"

class GameList extends Component {

    componentDidMount(){
        //console.log(this.props.userId)
    }

    render(){
        
        console.log(this.props.userId)

        return(
            <View style={styles.main}>

                <View style={styles.header}>
                    <Text> Your Games </Text>
                    <Button
                        icon={{
                            name: "open-in-new",
                            size: 15,
                            color: "white"
                        }}
                        title="Create A New Game"
                        onPress={() => this.props.navigation.navigate("NewGame")}
                    />
                </View>

                <Query query={getUserGames} variables={{user: this.props.userId}} fetchPolicy="network-only">
                        {({ error, loading, data}) => {
                              //  if(error) return console.log(error) 
                                if(loading) return <Text>Loading..</Text>
                                //console.log(data, error)
                                return(
                                    <View>
                                        {data.gamesByUser.items.map(g =>
                                            <TouchableOpacity key={g.id} style={styles.game}
                                            onPress={() => this.props.navigation.navigate("Game",{
                                                gameId: g.id
                                            })}
                                            >
                                                <ListItem
                                                title={g.title}
                                                />
                                            </TouchableOpacity>
                                        )}
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
        //flex: 1,
        marginTop: 60,
        marginLeft: 5,
        marginRight: 5
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
       // flex: 1,
        flexDirection: 'row'

    },
    game: {
        height: 60,
        borderColor: 'black',
        borderWidth: .5,
    }
})
export default GameList