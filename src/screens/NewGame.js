import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import CREATE_MUTATION from '../mutations/createGame';
import { useMutation } from '@apollo/react-hooks';
import colors from '../functions/colors';
import { ThemeContext } from '../context/ThemeContext';

import {
  Input,
  Icon,
  Button,
  CheckBox,
  ButtonGroup
} from 'react-native-elements';

import { darkColor, darkAccent } from '../functions/colors';

import getUserGames from '../queries/game/getUserGames';

import moment from 'moment';

function NewGame(props) {
  const { theme } = useContext(ThemeContext);
  // const [] = useState()

  const [createGame, { loading, error }] = useMutation(CREATE_MUTATION);
  console.log(props);
  const { navigation } = props;
  const player1 = navigation.getParam('player1');
  const player2 = navigation.getParam('player2');
  const buttons = ['classic', 'strict', 'free'];
  console.log(player1, player2);

  return (
    <View style={{ ...styles.main, backgroundColor: colors[theme].darkColor }}>
      <View>
        {/* <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        /> */}
        {/* 
        <Text>Number of Players: {this.state.players}</Text>

        <CheckBox
          title="Private"
          checked={this.state.private}
          onPress={() => this.setState({ private: !this.state.private })}
        /> */}

        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Button
            onPress={() => {
              // this.setState({ loading: true });
              createGame({
                variables: {
                  title: 'Last Card Game',
                  playerCount: 2,
                  gameType: 'classic',
                  private: true,
                  started_on: moment().format(),
                  user: '0768853979',
                  players: ['0768853979', '0764174513']
                },
                refetchQueries: [
                  {
                    query: getUserGames,
                    variables: {
                      user: '0768853979'
                    }
                  }
                ]
              })
                .then(res => {
                  console.log(res);
                  // this.setState({ loading: false }, () => {
                  //   this.props.navigation.navigate('GameList');
                  // });
                })
                .catch(err => console.log(err));
            }}
            title="Create New Game"
            color="#841584"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});

export default NewGame;
