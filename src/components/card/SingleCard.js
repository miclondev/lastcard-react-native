import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
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
    const { suit, value, num } = this.props 
    const suitRender = AllHtmlEntities.decode(type[suit].suit)
    return (
      <Spring native from={{ top: 10 }} to={{
        top: this.state.selected ? 10 : 100
        }}>
        {props => (
          <TouchableWithoutFeedback onPress={() => this.onPress(num)}>
            <AnimatedView style={{...props, ...styles.card,left: num * 50, position: 'absolute' }} >
                  <NumSuit value={value} suit={suitRender} color={type[suit].color} />
                    <View >
                      <Text style={styles.type}>{suitRender}</Text>
                    </View> 
                  <NumSuit value={value} suit={suitRender} color={type[suit].color} /> 
                </AnimatedView>
            </TouchableWithoutFeedback>
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
    height: 400,
    width: 240,
    margin: 5,
    padding: 5
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