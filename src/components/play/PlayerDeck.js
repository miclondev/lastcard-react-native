import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SingleCard from '../card/SingleCard';
import Loading from '../Loading';
import getHand from '../../queries/player/getHand';
import cards from '../../data/cards.json';

import { Entypo } from '@expo/vector-icons';
import { onSelectCard } from '../../functions/playCards';
import { UserContext } from '../../context/UserContext';
import { GameContext } from '../../context/GameContext';

const width = Dimensions.get('window').width;

function PlayerDeck(props) {
  const [myCards, setMyCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const { userId } = useContext(UserContext);
  const { game, hands } = useContext(GameContext);

  console.log(userId);

  return <View />;

  useEffect(() => {
    //find hand by user
    const index = hands.findIndex(a => a.user === userId);
    setMyCards(hands[index].myCards)

    //   const myCards = data ? data.handsByGame.items[0].myCards : [];
    //   console.log(myCards);
    //   // setMyCards(myCards);
    //   // setCurrentCards(myCards);
  }, []);

  // console.log(error, loading, data);

  // state = {
  //     action: "Select Cards",
  //     loading: false,
  //     myCards: [],
  //     selectedCards: [],
  //     currentCards: [],
  //     sort: false,
  //     message: undefined
  // }

  // componentDidMount() {
  //     this.getCurrentCards()
  // }

  //      const onPressAction = () => {
  //         const { action } = this.state

  //         if (action === "Sort Cards") {
  //             this.setState({ sort: !this.state.sort, action: "Play Cards" })
  //         }

  //         if (action === "Play Cards") {
  //             //play cards
  //         }
  //     }

  //     const getCurrentCards = () => {
  //         console.log(this.props.userId)
  //         this.props.client.query({
  //             query: getHand,
  //             variables: {
  //                 game: this.props.gameId,
  //                 user: this.props.user
  //             }
  //         }).then(res => {
  //             //console.log(res)
  //             const { myCards } = res.data.handsByGame.items[0]
  //             this.setState({
  //                 myCards,
  //                 currentCards: myCards
  //             })
  //         })
  //     }

  //     const canSelect = (num) => {
  //         let currentSelect = [...this.state.selectedCards]
  //         if (currentSelect.length === 0) {
  //             return true
  //         } else {
  //             let can = onSelectCard(num, currentSelect)
  //             return can
  //         }
  //     }

  //    const onSelectCard = (num) => {
  //         let currentSelect = [...this.state.selectedCards]
  //         let cardsOnHand = [...this.state.myCards]
  //         let card = cardsOnHand.findIndex(a => a === num)
  //         let canSelect = onSelectCard(num, currentSelect)
  //         console.log(canSelect)
  //         if (canSelect || currentSelect.length === 0) {
  //             console.log("selected")
  //             cardsOnHand.splice(card, 1)
  //             currentSelect.push(num)
  //             this.setState({
  //                 myCards: cardsOnHand,
  //                 selectedCards: currentSelect
  //             })
  //         } else {
  //             this.setState({ message: "select card with same number or suit" })
  //         }
  //     }

  // const onDeSelectCard = (num) => {
  //         let currentSelect = [...this.state.selectedCards]
  //         let cardsOnHand = [...this.state.myCards]
  //         let card = currentSelect.findIndex(a => a === num)
  //         currentSelect.splice(card, 1)
  //         cardsOnHand.push(num)

  //         this.setState({
  //             myCards: cardsOnHand,
  //             selectedCards: currentSelect
  //         })
  //     }

  //    const onPlayCards = () => {
  //         const { selectedCards, available } = this.state
  //         let newAvail = [...available]
  //         if (selectedCards.length > 0) {
  //             for (let i = 0; i < selectedCards.length; i++) {
  //                 let num = selectedCards[i].num
  //                 newAvail.filter(c => c.num !== num)
  //             }
  //             this.setState({
  //                 available: newAvail,
  //                 selectedCards: []
  //             })
  //         } {
  //             console.log("please select cards")
  //         }
  //     }

  //console.log(this.state)
  // // const { cards } = this.props
  // let data = []
  // if (this.state.sort) {
  //     data = this.state.selectedCards
  // } else {
  //     data = this.state.myCards
  // }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.main} horizontal={true}>
        {currentCards.map((c, i) => (
          <SingleCard
            value={cards[c].value}
            key={i}
            suit={cards[c].icon}
            num={i}
            c={c}
            // canSelect={this.canSelect}
            // onSelect={this.onSelectCard}
            // onDeSelect={this.onDeSelectCard}
          />
        ))}
      </ScrollView>

      <View style={styles.buttons}>
        <Entypo name="message" size={40} color="#EFFFCD" />

        <TouchableOpacity
          style={styles.action}
          // onPress={() => onPressAction()}
        >
          <Text style={styles.actionText}> play</Text>
        </TouchableOpacity>

        <Entypo name="message" size={40} color="#EFFFCD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    //backgroundColor: 'blue',
    width: 800,
  },
  buttons: {
    backgroundColor: '#2E2633',
    height: 60,
    width,
    position: 'absolute',
    bottom: 0,
    //alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  action: {
    backgroundColor: '#99173C',
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  actionText: {
    color: 'white',
    fontWeight: '400',
  },
});

export default PlayerDeck;
