import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Loading from '../../components/Loading';

import GameQuery from '../../queries/game/getGame';
import UpdateQuery from '../../mutations/updateGame';
import CreateMutation from '../../mutations/createHand';
import cardDeck from '../../data/cards.json';
import { shuffle } from '../../functions/playCards';
import { useQuery, useMutation } from '@apollo/react-hooks';

function GameOptions(props) {
  const { loading, error, data } = useQuery(GameQuery, {
    variables: {
      id: props.navigation.getParam('gameId'),
    },
  });
  const [updateGame] = useMutation(UpdateQuery);
  const [createHand] = useMutation(CreateMutation);

  //console.log(data);
  if (loading) return <Loading />;

  // state = {
  //   message: 'invite player to game',
  //   player1Create: false,
  //   player2Create: false,
  //   gameUpate: false
  // };

  const gotoGame = async () => {
    const { id, started } = data.getGame;
    if (started) {
      console.log('started');
      //navigate if game already started
      props.navigation.navigate('Game', {
        gameId: id,
      });
    } else {
      await initialCardHandOut();
      props.navigation.navigate('Game', {
        gameId: id,
      });
    }
  };

  const initialCardHandOut = async () => {
    const { getGame } = data;
    const { players } = getGame;
    const initialPlay = 4;
    let player1Cards = [];
    let player2Cards = [];
    let onPlay = [];
    let remainingCards = [];
    let cards = shuffle(cardDeck);

    //push cards
    for (let i = 0; i < initialPlay; i++) {
      player1Cards.push(cards[i].id);
      cards.splice(i, 1);
    }

    for (let i = 0; i < initialPlay; i++) {
      player2Cards.push(cards[i].id);
      cards.splice(i, 1);
    }

    onPlay.push(cards[0].id);

    cards.splice(0, 1);
    for (let i = 0; i < cards.length; i++) {
      remainingCards.push(cards[i].id);
    }

    console.log({
      game: getGame.id,
      gameId: getGame.id,
      user: players[0],
      number: 1,
      cards: player1Cards,
    });

    await createHand({
      variables: {
        game: getGame.id,
        gameId: getGame.id,
        user: players[0],
        number: 1,
        cards: player1Cards,
      },
    }).then(res => {
      console.log(res);
      // this.setState({ player1Create: true });
    });

    await createHand({
      variables: {
        game: getGame.id,
        gameId: getGame.id,
        user: players[1],
        number: 2,
        cards: player2Cards,
      },
    }).then(res => {
      console.log(res);
      // this.setState({ player2Create: true });
    });

    await updateGame({
      variables: {
        id: getGame.id,
        cards: remainingCards,
        onPlay,
        started: true,
      },
    }).then(res => {
      console.log(res);
      // this.setState({ loading: false, gameUpate: true });
    });
  };

  // console.log("game", this.props.game)
  const { getGame } = data;

  //console.log(game)

  // return <div />;

  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <Button
          containerStyle={styles.button}
          icon={<Icon name="keyboard-capslock" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: '#99173C',
          }}
          titleStyle={{
            color: '#EFFFCD',
          }}
          title={getGame.started ? 'Continue Game' : 'Start Game'}
          raised
          onPress={() => gotoGame(getGame.gameStarted, getGame.id)}
        />

        <Text> start game</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#2E2633',
    flex: 1,
    paddingTop: 70,
  },
  main: {
    flexDirection: 'column',
    //flex: 2,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: 20,
    //height: 500
    backgroundColor: '#2E2633',
  },
  button: {
    marginBottom: 50,
  },
});

export default GameOptions;

// compose(
//   graphql(createHand, {
//     name: 'createHand'
//   }),
//   graphql(updateGame, {
//     name: 'updateGame'
//   }),
//   graphql(getGame, {
//     name: 'getGame',
//     options: props => {
//       const { navigation } = props;
//       const id = navigation.getParam(
//         'gameId',
//         '6b63d5ca-7822-442b-91f2-4b3bc88da22d'
//       );
//       return {
//         variables: { id }
//       };
//     },
//     props: props => ({
//       loading: props.getGame.loading,
//       game: props.getGame.getGame ? props.getGame.getGame : {}
//     })
//   })
// )(GameOptions);
