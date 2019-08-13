import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class FriendSummary extends Component {

    render(){
        const { name, number } = this.props
        return(
            <View style={styles.main}>
                    <Text style={styles.text}> {name} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
      height: 40
    },
    text: {
        color: 'white'
    }
})

export default FriendSummary