import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import entities from "html-entities"

const { AllHtmlEntities } = entities

function NumSuit({ value, suit, color }) {
    return (
        <View style={styles.main}>
            <Text style={[styles.num, { color }]}> {value}  </Text>
            <Text style={[styles.img, { color }]}> {suit}  </Text>
        </View>
    )
}

class Card extends Component {
    render(){
        const { height =160, width= 100, rotate=10, backgroundColor ='#99173C', id=0, style } = this.props
        const { suit, value } = this.props 
        const suitRender = AllHtmlEntities.decode(suit)
        return(
            <View style={{...styles.main,
             height, width,
             backgroundColor,
                ...style,
                left: 20*id,
             }}>
                <NumSuit value={value} suit={suitRender}/>
                    <View >
                      <Text style={styles.type}>{suitRender}</Text>
                    </View> 
                  <NumSuit value={value} suit={suitRender}/> 
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

export default Card