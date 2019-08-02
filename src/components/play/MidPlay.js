import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import CardBack from "../card/CardBack"

class MidPlay extends Component {
    render(){
        return(
            <View style={styles.main}>
               <CardBack/>
               <CardBack
                rotate={-30}
                backgroundColor="white"
               >
                   <Text>
                       2 
                   </Text>
               </CardBack>
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
    },
    card: {

    }
})

export default MidPlay