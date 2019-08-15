import React, { Component } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"

import { Mutation } from "react-apollo"
import createGame from "../mutations/createGame"

import { Input, Icon, Button, CheckBox, ButtonGroup } from "react-native-elements"

import getUserGames from "../queries/game/getUserGames"


import moment from "moment"

class NewGame extends Component {

    state = {
        title: "Last Card Game",
        players: 2,
        gameType: "classic",
        private: true,
        loading: false,
        selectedIndex: 0
    }

    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }

    render() {
        // console.log(this.props)
        const { navigation } = this.props;

        const player1 = navigation.getParam('player1');
        const player2 = navigation.getParam('player2');

        const buttons = ['classic', 'strict', 'free']

        //console.log(player1, player2)

        return (
            <View style={styles.main}>
                <Mutation mutation={createGame}>
                    {(createGame, { loading, error }) => {
                        return (
                            <View>

                                <ButtonGroup
                                    onPress={this.updateIndex}
                                    selectedIndex={this.state.selectedIndex}
                                    buttons={buttons}
                                    containerStyle={{ height: 50 }}
                                />

                                <Text>Number of Players: {this.state.players}</Text>

                                <CheckBox
                                    title='Private'
                                    checked={this.state.private}
                                    onPress={() => this.setState({ private: !this.state.private })}
                                />

                                {
                                    this.state.loading ? <ActivityIndicator
                                        size="small"
                                        color="#0000ff"
                                    /> : <Button
                                            onPress={() => {
                                                this.setState({ loading: true })
                                                createGame({
                                                    variables: {
                                                        title: "Last Card Game",
                                                        playerCount: 2,
                                                        gameType: "classic",
                                                        private: this.state.private,
                                                        started_on: moment().format(),
                                                        user: this.props.userId,
                                                        players: [player1, player2]
                                                    }
                                                    , refetchQueries: [{
                                                        query: getUserGames,
                                                        variables: {
                                                            user: this.props.userId
                                                        }
                                                    }]
                                                }).then(res => {
                                                    this.setState({ loading: false }, () => {
                                                        this.props.navigation.navigate("GameList")
                                                    })
                                                }).catch(err => console.log(err))
                                            }
                                            }
                                            title="Create New Game"
                                            color="#841584"
                                        />
                                }

                            </View>
                        )
                    }}

                </Mutation>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        padding: 30
    }
})

export default NewGame