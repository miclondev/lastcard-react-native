import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import NumSuit from "./NumSuit"

import entities from "html-entities"

const { AllHtmlEntities } = entities

const type = [
  { id: 0, type: 'clubs', suit: '&clubs;', color: '#696969' },
  { id: 1, type: 'hearts', suit: '&hearts;', color: '#D00000' },
  { id: 2, type: 'diams', suit: '&diams;', color: '#D00000' },
  { id: 3, type: 'spades', suit: '&spades;', color: '#696969' },
]

class SingleCard extends Component {

  state = {
    selected: false
  }

  onPress = () => this.setState({selected: !this.state.selected})

  render() {
    const { suit, value, num, selected } = this.props
    const suitRender = AllHtmlEntities.decode(type[suit].suit)
    return (
      <TouchableOpacity onPress={this.onPress}
      style={[styles.main,
        { left: num * 50, top: num * 7 },
        this.state.selected && styles.selected
        ]}
      >
        
          <NumSuit value={value} suit={suitRender} color={type[suit].color} />
        
            <View >
              <Text style={styles.type}>{suitRender}</Text>
            </View>
          <NumSuit value={value} suit={suitRender} color={type[suit].color} />
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    height: 400,
    width: 240,
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    justifyContent: 'space-between',
    borderColor: "#696969",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2,
    position: 'absolute'
  },
  type: {
    fontSize: 100,
    textAlign: 'center'
  },
  selected:{
    top: -100
  }
})


export default SingleCard