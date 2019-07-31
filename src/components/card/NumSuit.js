import React from "react"
import { View, Text, StyleSheet } from "react-native"



function NumSuit({ value, suit, color }) {
    return (
        <View style={styles.main}>
            <Text style={[styles.num, { color }]}> {value}  </Text>
            <Text style={[styles.img, { color }]}> {suit}  </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    num: {
        fontSize: 40,
        fontWeight: "500",
    },
    img: {
        fontSize: 24
    }
})


export default NumSuit