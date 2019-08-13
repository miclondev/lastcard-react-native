import React, { Component } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import FriendSummary from "../../components/friends/FriendSummary"
import Loading from "../../components/Loading"

import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions'

class Friends extends Component {

    state = {
        contacts: [],
        loading: false,
        pageSize: 40,
        pageOffset: 0
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
        const { pageOffset, pageSize } = this.state
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers],
            pageSize,
            pageOffset
        });
        this.setState({
            contacts: data
        })
    }

    render(){
        //console.log(this.state.contacts)
        return(
            <View style={styles.main}>
                <Text>  Friends  </Text>
                
                    {
                        this.state.loading ? <Loading/> :
                        <ScrollView> 
                            {this.state.contacts.map(f =>
                                    <FriendSummary
                                        name={f.name}
                                        key={f.id}
                                        id={f.id}
                                    />
                            
                            )}
                        </ScrollView>
                    }
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#2E2633'
    }
})

export default Friends