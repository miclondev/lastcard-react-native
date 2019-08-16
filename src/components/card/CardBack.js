import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class CardBack extends Component {
    render(){
        const { height =160, width= 100, rotate=10, backgroundColor ='#99173C', id=0, style } = this.props
        return(
            <View style={{
                ...style,
            ...styles.main,
             height, width,
             backgroundColor, transform: [{rotate: `${rotate}deg`}],
                
                left: 20*id,
             }}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#696969',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: .1,
            height: 1,
        },
        shadowOpacity: 0.45,
        shadowRadius: 2.41,
        elevation:4
    }
})

export default CardBack