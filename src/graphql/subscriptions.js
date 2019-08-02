// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onUpdateHand = `subscription OnUpdateHand {
  onUpdateHand {
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
export const onDeleteHand = `subscription OnDeleteHand {
  onDeleteHand {
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
