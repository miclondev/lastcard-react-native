import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks"
import { Rehydrated } from "aws-appsync-react";
import AWSAppSyncClient from "aws-appsync";
import awsmobile from './aws-exports'
import MainNav from './src/MainNav'

import { ThemeProvider } from './src/context/ThemeContext'
import { UserProvider } from './src/context/UserContext'

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    apiKey: awsmobile.aws_appsync_apiKey
  }
})

function AppState() {
  return (
    <ThemeProvider>
      <UserProvider>
        <MainNav />
      </UserProvider>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Rehydrated>
        <AppState />
      </Rehydrated>
    </ApolloProvider>
  )
}

export default App

