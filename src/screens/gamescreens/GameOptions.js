import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Loading from '../../components/Loading';

import GameQuery from '../../queries/game/getGame';
import UpdateQuery from '../../mutations/updateGame';
import CreateMutation from '../../mutations/createHand';
import cardDeck from '../../data/cards.json';
import { shuffle } from '../../functions/playCards';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GameContext } from '../../context/GameContext';

function GameOptions(props) {
  //get context
  const { setGame, setHands } = useContext(GameContext);

  const { loading, error, data } = useQuery(GameQuery, {
    variables: {
      id: props.navigation.getParam('gameId'),
      game: props.navigation.getParam('gameId'),
    },
  });
  const [updateGame] = useMutation(UpdateQuery);
  const [createHand] = useMutation(CreateMutation);

  useEffect(() => {
    if (!loading && !error) {
      setGame(data.game);
      setHands(data.hands);
    }
  }, [loading]);

  if (loading) return <Loading />;

  const gotoGame = async () => {
    const { id, started } = data.game;
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

  ///create a new game
  const initialCardHandOut = async () => {
    const { game } = data;
    const { players } = game;
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

    await createHand({
      variables: {
        game: game.id,
        gameId: game.id,
        user: players[0],
        number: 1,
        cards: player1Cards,
      },
    });

    await createHand({
      variables: {
        game: game.id,
        gameId: game.id,
        user: players[1],
        number: 2,
        cards: player2Cards,
      },
    });

    await updateGame({
      variables: {
        id: game.id,
        cards: remainingCards,
        onPlay,
        started: true,
      },
    });
  };

  const { game } = data;
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
          title={game.started ? 'Continue Game' : 'Start Game'}
          raised
          onPress={() => gotoGame(game.gameStarted, game.id)}
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
