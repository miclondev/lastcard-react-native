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

  onPress = () => {
    const { onSelect, onDeSelect, noAction, c  } = this.props
    if(!noAction){
      this.setState({selected: !this.state.selected}, () => {
          if(this.state.selected){
              onSelect(c)
          }else{
              onDeSelect(c)
          }
      })
  }
}

  render() {
    const { suit, value, num } = this.props 
    
    //console.log(suit, value, num)

    const suitRender = AllHtmlEntities.decode(suit)
    return (
      <Spring native from={{ top: 100 }} to={{
        top: this.state.selected ? 10 : 100
        }}>
        {props => (
          <TouchableWithoutFeedback onPress={() => this.onPress()}>
            <AnimatedView style={{...props, ...styles.card,left: num * 50}} >
                  <NumSuit value={value} suit={suitRender}/>
                    <View >
                      <Text style={styles.type}>{suitRender}</Text>
                    </View> 
                  <NumSuit value={value} suit={suitRender}/> 
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
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: 'white',
    height: 400,
    width: 240,
    margin: 5,
    padding: 5,
    position: 'absolute', 
   // top: 100
  },
  type: {
    fontSize: 100,
    textAlign: 'center'
  }
})


export default SingleCard