import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import awsmobile from './aws-exports';

import GameNav from './src/nav/GameNav';

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ThemeProvider } from './src/context/ThemeContext';
import { UserProvider } from './src/context/UserContext';

const url = awsmobile.aws_appsync_graphqlEndpoint;

const region = awsmobile.aws_appsync_region;
const auth = {
  type: awsmobile.aws_appsync_authenticationType,
  apiKey: awsmobile.aws_appsync_apiKey
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink(url, httpLink)
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => object.key || null
  })
});

function AppState() {
  return (
    <ThemeProvider>
      <UserProvider>
        <GameNav />
      </UserProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <AppState />
    </ApolloProvider>
  );
}

export default App;
