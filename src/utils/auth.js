import React, { Component } from "react"
import { AsyncStorage } from "react-native"
// import { } from "react-navigation"

export default (ComposedComponent) => class CheckAuth extends Component {

    constructor(props){
        super(props)
        this.state ={
            loggedIn: false,
            userName: undefined,
            userImage: undefined,
            userId: undefined
        }
    }

    async componentDidMount (){
      await this.checkSignedIn()
      await this.getUser()
    }

    componentDidUpdate() {
        console.log("props of auth ",this.props.navigation.state)
    }

    checkSignedIn = async () => {
            try {
                const value = await AsyncStorage.getItem("user")
                if (value !== null) {
                    return this.setState({ loggedIn: true })
                }else{
                    console.log("not signed in")
                     this.props.navigation.navigate("Auth")
                }
            } catch (e) {
                  this.props.navigation.navigate("Auth")
            }
    }

    getUser = async () => {
            try {
                const user = await AsyncStorage.getItem("user")
                if (user !== null) {
                    const person = JSON.parse(user)
                    return this.setState({
                        userName: person.name,
                        userImage: person.picture,
                        userId: person.sub
                    })
                }
                
            } catch (e) {
                console.log(e)
                this.props.navigation.navigate("Auth")
        }
    }

    onLogout = async () => {
        await AsyncStorage.removeItem("user")
        this.setState({
            userImage: undefined,
            userName: undefined,
            userId: undefined,
            loggedIn: false
        }, () => {
            console.log("user has been signed out")
            this.props.navigation.navigate("Auth")
        })
    }

    render() {
       console.log(this.props.navigation.state)
            return <ComposedComponent
                        {...this.props}
                        loggedIn={this.state.loggedIn}
                        userName={this.state.userName}
                        userImage={this.state.userImage}
                        logOut={this.onLogout}
                 />
    }
}
