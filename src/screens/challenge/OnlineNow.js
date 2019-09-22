import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import PersonSmall from "../../components/people/PersonSmall"
import { darkColor } from "../../functions/colors"

class OnlineNow extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text> Online Now </Text>
                <View>
                    <PersonSmall
                        name="Malicks5"
                        id="0764174513"
                        status="accepting challenge"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 7,
        backgroundColor: darkColor
    }
})

export default OnlineNow