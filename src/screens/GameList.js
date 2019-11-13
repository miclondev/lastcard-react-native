import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import Loading from '../components/Loading';
import { useQuery } from 'react-apollo';
import getUserGames from '../queries/game/getUserGames';
import colors from '../functions/colors';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function GameList(props) {
  const { theme } = useContext(ThemeContext);

  const { userId, loggedIn, checkSignedIn, getUserId } = useContext(
    UserContext
  );
  console.log(userId, loggedIn, checkSignedIn);

  useEffect(() => {
    async function checkUser() {
      const user = await getUserId();
      if (!user) {
        props.navigation.navigate('Auth');
      }
      return user;
    }
    checkUser();
  }, []);

  const { loading, error, data } = useQuery(getUserGames, {
    variables: { user: userId },
  });

  if (loading) return <Loading />;

  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  return (
    <View style={{ ...styles.main, backgroundColor: colors[theme].darkColor }}>
      <View style={styles.header}>
        <Text style={styles.text}> Your Games </Text>
        <Button
          icon={{
            name: 'open-in-new',
            size: 15,
            color: 'white',
          }}
          buttonStyle={{
            backgroundColor: '#99173C',
          }}
          titleStyle={{
            color: '#EFFFCD',
          }}
          title="Create A New Game"
          onPress={() => props.navigation.navigate('NewGame')}
        />
      </View>

      <View style={styles.games}>
        {data.gamesByUser.items.map(g => (
          <TouchableOpacity
            key={g.id}
            style={{
              ...styles.game,
              backgroundColor: colors[theme].darkVarient,
            }}
            onPress={() =>
              props.navigation.navigate('GameOptions', {
                gameId: g.id,
              })
            }
          >
            <Text style={styles.text}> {g.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
    flexDirection: 'row',
  },
  games: {
    flexDirection: 'row',
    flex: 2,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 30,
  },
  game: {
    height: 150,
    width: 160,
    // borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#555152',
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    //flex: 1
  },
  text: {
    color: '#EFFFCD',
  },
});
export default GameList;
