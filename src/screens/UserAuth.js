import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { AuthSession } from 'expo';
import jwtDecode from 'jwt-decode';
import { AsyncStorage } from 'react-native';


import getUser from "../queries/user/getUser"

import createProfile from "../mutations/createUser"
import { withApollo } from "react-apollo"

const auth0ClientId = 'f4WYtl8Js3BMEb375NISav30DqfcGEBY';
const auth0Domain = 'https://dev-sjm7bapo.eu.auth0.com';

function toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
}

class UserAuth extends React.Component {
    state = {
      name: null,
      id: null,
      image: null
    };
  
    login = async () => {
      // Retrieve the redirect URL, add this to the callback URL list
      // of your Auth0 application.
      const redirectUrl = AuthSession.getRedirectUrl();
      //console.log(`Redirect URL: ${redirectUrl}`);
      
      // Structure the auth parameters and URL
      const queryParams = toQueryString({
        client_id: auth0ClientId,
        redirect_uri: redirectUrl,
        response_type: 'id_token', // id_token will return a JWT token
        scope: 'openid profile', // retrieve the user's profile
        nonce: 'nonce', // ideally, this will be a random value
      });

      const authUrl = `${auth0Domain}/authorize` + queryParams;
      // Perform the authentication
      const response = await AuthSession.startAsync({ authUrl });
     // console.log('Authentication response', response);
  
      //  console.log(response)

      if (response.type === 'success') {
        await this.handleResponse(response.params);
        this.createUserProfile()
      }

    };


    createUserProfile = () => {
       const { id, name, image } = this.state
       console.log(id, name, image)

      this.props.client.query({
        query: getUser,
        variables: {
           id
        }
      }).then(res => console.log(res))

    }

    
  
    handleResponse = async (response) => {
      if (response.error) {
        Alert('Authentication error', response.error_description || 'something went wrong');
        return;
      }
  
      // Retrieve the JWT token and decode it
      const jwtToken = response.id_token;

      const decoded = await jwtDecode(jwtToken);
  
      const { name, sub, picture } = decoded;
      console.log(sub, name)

        try {
          await AsyncStorage.setItem("user", JSON.stringify(decoded))
      
          //console.log(res)

          
          // .then(res => {
          //   console.log(res)
            // if(res.getProfile){

            //   this.props.navigation.navigate("Profile")
            
            // }else{
              
            //   console.log(sub, name, picture)

            //   this.props.client.mutate({
            //     mutation: createProfile,
            //     variables: {
            //       id: sub,
            //       userID: sub,
            //       name,
            //       image: picture
            //     }
            //   }).then(res => {
            //     console.log(res)
            //     this.props.navigation.navigate("Profile")
            //   })

            // }
          
          // })
        } catch (e) {
          console.log(e)
          // saving error
        }
      this.setState({ name, id: sub, image: picture });
    };
  
    render() {
      const { name } = this.state;
  
      return (
        <View style={styles.container}>
          {
            name ?
            <Text style={styles.title}>You are logged in, {name}!</Text> :
            <Button title="Log in with Auth0" onPress={this.login} />
          }
        </View>
      );
    }
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
  


export default withApollo(UserAuth)
