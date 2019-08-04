// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreatePlayerStats = `subscription OnCreatePlayerStats {
  onCreatePlayerStats {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const onUpdatePlayerStats = `subscription OnUpdatePlayerStats {
  onUpdatePlayerStats {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const onDeletePlayerStats = `subscription OnDeletePlayerStats {
  onDeletePlayerStats {
    id
    gamesWon
    gemesLost
    ranking
  }
}
`;
export const onCreateHand = `subscription OnCreateHand {
  onCreateHand {
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
export const onUpdateHand = `subscription OnUpdateHand {
  onUpdateHand {
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
export const onDeleteHand = `subscription OnDeleteHand {
  onDeleteHand {
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
