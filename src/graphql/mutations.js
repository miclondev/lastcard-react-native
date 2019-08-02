// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createPlayerStats = `mutation CreatePlayerStats($input: CreatePlayerStatsInput!) {
  createPlayerStats(input: $input) {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const updatePlayerStats = `mutation UpdatePlayerStats($input: UpdatePlayerStatsInput!) {
  updatePlayerStats(input: $input) {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const deletePlayerStats = `mutation DeletePlayerStats($input: DeletePlayerStatsInput!) {
  deletePlayerStats(input: $input) {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const createHand = `mutation CreateHand($input: CreateHandInput!) {
  createHand(input: $input) {
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
export const updateHand = `mutation UpdateHand($input: UpdateHandInput!) {
  updateHand(input: $input) {
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
export const deleteHand = `mutation DeleteHand($input: DeleteHandInput!) {
  deleteHand(input: $input) {
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
