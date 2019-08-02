// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    playerCount
    winner
    players
    createdBy
    startCards
    gameType
    private
    finished
    cards {
      value
      suit
      image
    }
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
      players
      createdBy
      startCards
      gameType
      private
      finished
      cards {
        value
        suit
        image
      }
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
    myCards {
      value
      suit
      image
    }
    available {
      value
      suit
      image
    }
    selectedCards {
      value
      suit
      image
    }
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
      myCards {
        value
        suit
        image
      }
      available {
        value
        suit
        image
      }
      selectedCards {
        value
        suit
        image
      }
    }
    nextToken
  }
}
`;
