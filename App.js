import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import AWSAppSyncClient from "aws-appsync";
import awsmobile from './aws-exports'
import MainNav from './src/MainNav'

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    apiKey: awsmobile.aws_appsync_apiKey
  }
})

class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
        <Rehydrated>
          <MainNav/>
        </Rehydrated>
      </ApolloProvider>
    )
  }
}

export default App

