import React, { createContext, useState } from 'react';
import { AsyncStorage } from 'react-native';

export const UserContext = createContext();

export function UserProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(undefined);

  async function getUserId() {
    try {
      const value = await AsyncStorage.getItem('lastCardId');
      if (value !== null) {
        // We have data!!
        signIn(value);
        return value;
      }
    } catch (error) {
      return undefined;
      // Error retrieving data
    }
  }

  async function signIn(num) {
    //run a bunch of code in here
    await AsyncStorage.setItem('lastCardId', num);
    setLoggedIn(true);
    setUserId(num);
  }

  async function signOut() {
    await AsyncStorage.removeItem('lastCardId');
    setLoggedIn(true);
    setUserId(undefined);
  }

  return (
    <UserContext.Provider
      value={{ userId, loggedIn, signIn, getUserId, signOut }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
