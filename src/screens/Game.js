import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PlayerDeck from '../components/play/PlayerDeck';
import BackDeck from '../components/play/BackDeck';
import MidPlay from '../components/play/MidPlay';
import Loading from '../components/Loading';
import colors, { darkColor, darkAccent } from '../functions/colors';
import { ThemeContext } from '../context/ThemeContext';

const width = Dimensions.get('window').width;

function Game(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={{ ...styles.main, backgroundColor: colors[theme].darkColor }}>
      <View style={styles.top}>
        <BackDeck />
      </View>

      <View style={styles.mid}>
        <MidPlay />
      </View>

      <View style={styles.bottom}>
        <PlayerDeck />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  top: {
    // backgroundColor: 'red',
    flex: 1,
  },
  mid: {
    //backgroundColor: 'grey',
    flex: 1,
  },
  bottom: {
    //backgroundColor: 'grey',
    flex: 1,
  },
  topBar: {
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    width,
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Game;
