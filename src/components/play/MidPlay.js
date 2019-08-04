import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import CardBack from "../card/CardBack"
import { Query } from "react-apollo"
import getGame from "../../queries/game/getGame"

class MidPlay extends Component {
    render(){
        return(
            <View>
            
                <Query 
                    query={getGame} 
                    variables={{ id: "item-test-1"}}
                    fetchPolicy="cache-first"
                >
                    {({ error, loading, data}) => {
                        if(error) console.log(error)
                        if(loading) return <Text>Loading....</Text>
                       // console.log(data)
                        return(
                            <View style={styles.main}>
                                
                                <CardBack/>

                                    <CardBack
                                      rotate={-30}
                                      backgroundColor="white"
                                    >
                                        <Text>
                                            2 
                                        </Text>
                                    </CardBack>
                            </View>
                            )
                    }}
                    
                </Query>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})

export default MidPlay