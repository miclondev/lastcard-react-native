import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-elements"

class GameList extends Component {

    componentDidMount(){
        //console.log(this.props.userId)
    }

    render(){
        //console.log(this.props)
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        //flex: 1,
        marginTop: 60,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
       // flex: 1,
        flexDirection: 'row'

    }
})
export default GameList