import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { UserContext } from '../context/UserContext';

import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { Input, Icon } from 'react-native-elements';

function UserAuth(props) {
  const [num, setNum] = useState(undefined);
  const { signIn } = useContext(UserContext);

  const login = async () => {
    if (num) {
      await signIn(num);
      goToProfile();
    }
  };

  // confirm = async () => {
  //   try {
  //     const { number, conf } = this.state;
  //     this.setState({ loading: true });
  //     const res = await axios.post(
  //       `https://qfv3tcu7ih.execute-api.eu-west-1.amazonaws.com/prod/confirm?type=confirm&number=${number}&conf=${conf}`
  //     );
  //     console.log(res.data);
  //     if (res.data.response === 'confirmed') {
  //       await AsyncStorage.setItem('lastCardId', number);
  //       this.goToProfile();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const goToProfile = () => props.navigation.navigate('GameList');

  return (
    <View style={styles.container}>
      <Text>{num} </Text>
      {/* {this.state.confirm ? (
        <View style={{ width: 400 }}>
          <Input
            label="Number"
            placeholder="Enter Number"
            onChangeText={number => this.setState({ conf: number })}
            value={this.state.conf}
            leftIcon={<Icon name="battery-full" size={34} color="black" />}
          />
          <Button title="Confirm" onPress={this.confirm} />
        </View>
      ) : ( */}
      <View style={{ width: 400 }}>
        <Input
          label="Number"
          placeholder="Enter Number"
          onChangeText={number => setNum(number)}
          value={num}
          leftIcon={<Icon name="battery-full" size={34} color="black" />}
        />
        <Button title="Ingia Last Card" onPress={login} />
      </View>
      {/* )} */}

      {/* {this.state.loading && <ActivityIndicator />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default UserAuth;
