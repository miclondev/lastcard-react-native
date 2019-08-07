// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    playerCount
    winner
    createdBy
    startCards
    gameType
    private
    finished
    started
    cards
    onPlay
    user
    started_on
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      playerCount
      winner
      createdBy
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
    }
    nextToken
  }
}
`;
export const getPlayerStats = `query GetPlayerStats($id: ID!) {
  getPlayerStats(id: $id) {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const listPlayerStatss = `query ListPlayerStatss(
  $filter: ModelPlayerStatsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayerStatss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gamesWon
      gemesLost
      ranking
    }
    nextToken
  }
}
`;
export const getHand = `query GetHand($id: ID!) {
  getHand(id: $id) {
    id
    myCards
    available
    selectedCards
    game {
      id
      title
      playerCount
      winner
      createdBy
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
    }
    gameId
    user
    playerNumber
  }
}
`;
export const listHands = `query ListHands(
  $filter: ModelHandFilterInput
  $limit: Int
  $nextToken: String
) {
  listHands(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      myCards
      available
      selectedCards
      game {
        id
        title
        playerCount
        winner
        createdBy
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
      }
      gameId
      user
      playerNumber
    }
    nextToken
  }
}
`;
export const getMessages = `query GetMessages($id: ID!) {
  getMessages(id: $id) {
    id
    game {
      id
      title
      playerCount
      winner
      createdBy
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const listMessagess = `query ListMessagess(
  $filter: ModelMessagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      game {
        id
        title
        playerCount
        winner
        createdBy
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
      }
      gameId
      user
      content
      sentOn
    }
    nextToken
  }
}
`;
export const gamesByUser = `query GamesByUser(
  $user: String
  $started_on: ModelStringKeyConditionInput
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  gamesByUser(
    user: $user
    started_on: $started_on
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      playerCount
      winner
      createdBy
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
    }
    nextToken
  }
}
`;
export const handsByGame = `query HandsByGame(
  $gameId: String
  $user: ModelStringKeyConditionInput
  $filter: ModelHandFilterInput
  $limit: Int
  $nextToken: String
) {
  handsByGame(
    gameId: $gameId
    user: $user
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      myCards
      available
      selectedCards
      game {
        id
        title
        playerCount
        winner
        createdBy
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
      }
      gameId
      user
      playerNumber
    }
    nextToken
  }
}
`;
export const messagesByGame = `query MessagesByGame(
  $gameId: String
  $sentOn: ModelStringKeyConditionInput
  $filter: ModelMessagesFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByGame(
    gameId: $gameId
    sentOn: $sentOn
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      game {
        id
        title
        playerCount
        winner
        createdBy
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
      }
      gameId
      user
      content
      sentOn
    }
    nextToken
  }
}
`;
