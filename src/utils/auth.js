import React, { Component } from "react"
import { AsyncStorage } from "react-native"
// import { } from "react-navigation"

export default (ComposedComponent) => class CheckAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        await this.checkSignedIn()
    }

    checkSignedIn = async () => {
        try {
            const userId = await AsyncStorage.getItem("lastCardId")
            if (userId !== null) {
                return this.setState({ loggedIn: true, userId })
            } else {
                console.log("not signed in")
                this.props.navigation.navigate("Auth")
            }
        } catch (e) {
            this.props.navigation.navigate("Auth")
        }
    }

    onLogout = async () => {
        await AsyncStorage.removeItem("lastCardId")
        this.props.navigation.navigate("Auth")
    }

    render() {
        console.log(this.props.navigation.state)
        return <ComposedComponent
            {...this.props}
            loggedIn={this.state.loggedIn}
            userId={this.state.userId}
            logOut={this.onLogout}
        />
    }
}
