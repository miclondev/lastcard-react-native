import React, { Component }from "react"
import { View } from "react-native"

import { Mutation } from "react-apollo"
import createGame from "../mutations/createGame"

import { Input, Icon } from "react-native-elements"

import moment from "moment"

class NewGame extends Component {

    state= {
        title: "Last Card Game",
        players: 2,
        gameType: "classic",
        private: true,
    }

    render(){
        return(
            <View>
                <Mutation mutation={createGame}>
                    {(createGame, { loading, error}) => {
                        return(
                            <Input
                            placeholder='game title'
                            value={this.state.title}
                            onChange={e => console.log(e.nativeEvent.text)}
                            label="enter game title"
                            leftIcon={
                                <Icon
                                name='ac-unit'
                                size={24}
                                color='black'
                                />
                            }
                            />
                        )  
                    }}
                    
                </Mutation>
            </View>
        )
    }
}

export default NewGame