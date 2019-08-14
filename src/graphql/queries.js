// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    playerCount
    winner
    startCards
    gameType
    private
    finished
    started
    cards
    onPlay
    user
    started_on
    players
    diretion
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
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
      players
      diretion
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
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
      players
      diretion
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
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
        players
        diretion
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
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
      players
      diretion
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
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
        players
        diretion
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
export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    name
    image
    userID
    followers
    following
    friends {
      name
      image
      id
    }
    gamesWon
    gemesLost
    ranking
    last_played_on
    inGame
    lastAvailable
    points
    level
    trophies {
      items {
        id
        name
        image
      }
      nextToken
    }
    canBeChallenged
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      userID
      followers
      following
      friends {
        name
        image
        id
      }
      gamesWon
      gemesLost
      ranking
      last_played_on
      inGame
      lastAvailable
      points
      level
      trophies {
        nextToken
      }
      canBeChallenged
    }
    nextToken
  }
}
`;
export const getTrophy = `query GetTrophy($id: ID!) {
  getTrophy(id: $id) {
    id
    name
    image
  }
}
`;
export const listTrophys = `query ListTrophys(
  $filter: ModelTrophyFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrophys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
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
      startCards
      gameType
      private
      finished
      started
      cards
      onPlay
      user
      started_on
      players
      diretion
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
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
        players
        diretion
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
        startCards
        gameType
        private
        finished
        started
        cards
        onPlay
        user
        started_on
        players
        diretion
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
export const searchProfiles = `query SearchProfiles(
  $filter: SearchableProfileFilterInput
  $sort: SearchableProfileSortInput
  $limit: Int
  $nextToken: Int
) {
  searchProfiles(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      image
      userID
      followers
      following
      friends {
        name
        image
        id
      }
      gamesWon
      gemesLost
      ranking
      last_played_on
      inGame
      lastAvailable
      points
      level
      trophies {
        nextToken
      }
      canBeChallenged
    }
    nextToken
  }
}
`;
