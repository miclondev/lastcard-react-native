import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { darkColor, darkAccent } from '../functions/colors';
import { Button } from 'react-native-elements';
import { UserContext } from '../context/UserContext';

function Profile(props) {
  const { signOut } = useContext(UserContext);

  async function signUserOut() {
    await signOut();
    props.navigation.navigate('Auth');
  }

  return (
    <View style={styles.main}>
      <Text> Profile </Text>
      <View style={{ marginTop: 100 }}>
        <Button title="Log Out" onPress={() => signUserOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: darkColor,
    flex: 1,
  },
});

export default Profile;
