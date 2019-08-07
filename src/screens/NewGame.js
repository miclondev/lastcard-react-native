import React, { Component }from "react"
import { View, Text, StyleSheet, ActivityIndicator  } from "react-native"

import { Mutation } from "react-apollo"
import createGame from "../mutations/createGame"

import { Input, Icon, Button, CheckBox, Slider } from "react-native-elements"

import moment from "moment"

class NewGame extends Component {

    state= {
        title: "Last Card Game",
        players: 2,
        gameType: "classic",
        private: true,
        loading: false
    }

    render(){
        
        //console.log(this.props)

        return(
            <View style={styles.main}>
                <Mutation mutation={createGame}>
                    {(createGame, { loading, error}) => {
                        return(
                            <View>

                                <Input
                                placeholder='game title'
                                value={this.state.title}
                                onChangeText={title => this.setState({ title })}
                                label="Enter Game Title"
                                leftIcon={
                                    <Icon
                                    name='ac-unit'
                                    size={24}
                                    color='black'
                                    />
                                }
                                shake={true}
                                />

                                <Input
                                placeholder='game type'
                                value={this.state.gameType}
                                label="Game Type"
                                leftIcon={
                                    <Icon
                                    name='ac-unit'
                                    size={24}
                                    color='black'
                                    />
                                }
                                shake={true}
                                />


                            <Text>Number of Players: {this.state.players}</Text>
                            <Slider
                                value={this.state.players}
                                onValueChange={players => this.setState({ players })}
                                minimumValue={1}
                                maximumValue={4}
                                step={1}
                            />


                        <CheckBox
                                title='Private'
                                checked={this.state.private}
                                onPress={() => this.setState({ private: !this.state.private})}
                        />

                       {
                           this.state.loading ? <ActivityIndicator
                           size="small"
                           color="#0000ff"
                           /> : <Button
                                    onPress={() =>{
                                        this.setState({ loading: true})
                                        createGame({
                                            variables: {
                                                ...this.state,
                                                started_on: moment().format(),
                                                user: this.props.userId
                                            }
                                    }).then(res => {
                                        console.log(res)
                                        this.setState({loading: false}, () => {
                                            this.props.navigation.navigate("GameList")
                                        })
                                    })
                                    .catch(err => console.log(err))}
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