import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import NumSuit from "./NumSuit"
import { Spring, animated } from 'react-spring/renderprops-native'
import entities from "html-entities"

const { AllHtmlEntities } = entities
const AnimatedView = animated(View)

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

  onPress = (index) => {
    const { onSelect, onDeSelect, noAction } = this.props
    if(!noAction){
      this.setState({selected: !this.state.selected}, () => {
          if(this.state.selected){
              onSelect(index)
          }else{
              onDeSelect(index)
          }
      })
  }
}
  render() {
    const { suit, value, num, absolute } = this.props
    const suitRender = AllHtmlEntities.decode(type[suit].suit)
    return (
      <Spring native from={{ top: 7 }} to={{top: this.state.selected ? -100: 7}}>
        {props => (
            <TouchableOpacity onPress={() => this.onPress(num)} style={{...styles.main, 
            left: num * 50, top: num * 7, position: 'absolute' }}>
            <AnimatedView style={{...props, ...styles.card}} >
                  <NumSuit value={value} suit={suitRender} color={type[suit].color} />
                    <View >
                      <Text style={styles.type}>{suitRender}</Text>
                    </View> 
                  <NumSuit value={value} suit={suitRender} color={type[suit].color} /> 
                </AnimatedView>
            </TouchableOpacity>
          )}
      </Spring>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#696969",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: 'white',
  },
  touch: {
    position: 'relative'
  },
  main: {
    height: 400,
    width: 240,
    margin: 5,
    padding: 5,
    justifyContent: 'space-between',
    
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