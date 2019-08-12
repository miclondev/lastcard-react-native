import React, { Component } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import FriendSummary from "../components/friends/FriendSummary"

import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions'

class Friends extends Component {

    state = {
        contacts: [],
        loading: false
    }

    async componentDidMount(){
        await this.checkPermission()       
    }

    checkPermission = async () => {
        this.setState({ loading: true })
        const { status, expires, permissions } = await Permissions.getAsync(
          Permissions.CONTACTS
        );
        console.log(status, expires, permissions)
        if (status !== 'granted') {
            await this.getPermission()
        }else{
           await this.getContacts()
           this.setState({loading: false})
        }
    }

    getPermission = async () => {
        const { status, permissions } = await Permissions.askAsync(Permissions.CONTACTS)
        console.log(status,permissions)
        if( status === "granted"){
            await this.getContacts()
            this.setState({loading: false})
        }
    }

    getContacts = async () => {
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
        });
        this.setState({
            contacts: data
        })
    }

    render(){
        return(
            <View>
                <Text>  Friends  </Text>
                    {
                        this.stateloading ? <ActivityIndicator/> :
                        this.state.contacts.map(f => <FriendSummary
                            name={f.firstName}
                            key={f.id}
                        />)
                    }
              
            </View>
        )
    }
}

export default Friends