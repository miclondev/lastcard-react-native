import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

import { AsyncStorage } from 'react-native';
import axios from "axios"

import { Input, Icon } from "react-native-elements"

import { Query, graphql } from "react-apollo"

class UserAuth extends React.Component {

    state = {
      number: "0768853979",
      conf: "8407",
      confirm: false,
      loading: false,
      message: undefined
    };
  
    login = async () => {
        const { number } = this.state
        this.setState({loading: true })
        const res =  await axios.post(`https://qfv3tcu7ih.execute-api.eu-west-1.amazonaws.com/prod/number?type=login&number=${number}`)
        if(res.data.response === "confirm"){
          this.setState({ confirm: true, loading: false })
        }
    };


    confirm = async () => {
      try{
      const { number, conf } = this.state
      this.setState({loading: true })
      const res =  await axios.post(`https://qfv3tcu7ih.execute-api.eu-west-1.amazonaws.com/prod/confirm?type=confirm&number=${number}&conf=${conf}`)
      console.log(res.data) 
      if(res.data.response === "confirmed"){
          await AsyncStorage.setItem("lastCardId", number)
          this.goToProfile()
        }
      }catch(e){
        console.log(e)
     }
    }

    goToProfile = () => this.props.navigation.navigate("Profile") 
  
    render() {
  
      return (
        <View style={styles.container}>

          {
            this.state.confirm ?
            <View style={{ width: 400}}>

                <Input
                    label="Number"
                    placeholder='Enter Number'
                    onChangeText={number => this.setState({ conf: number })}
                    value={this.state.conf}
                    leftIcon={
                        <Icon
                        name='battery-full'
                        size={34}
                        color='black'
                        />
                    }
                />
                <Button title="Confirm" 
                    onPress={this.confirm} 
                />
            
            </View> :
            <View style={{ width: 400 }}>
               <Input
                    label="Number"
                    placeholder='Enter Number'
                    onChangeText={number => this.setState({ number })}
                    value={this.state.number}
                    leftIcon={
                        <Icon
                        name='battery-full'
                        size={34}
                        color='black'
                        />
                    }
                />
                <Button title="Ingia Last Card" 
                    onPress={this.login} 
                />

            </View>
          }

          {
            this.state.loading && <ActivityIndicator/>
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
  


export default UserAuth
