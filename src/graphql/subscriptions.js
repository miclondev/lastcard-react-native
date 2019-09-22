// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
    direction
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
    direction
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
    direction
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
      direction
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
      direction
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
      direction
    }
    gameId
    user
    playerNumber
  }
}
`;
export const onCreateMessages = `subscription OnCreateMessages {
  onCreateMessages {
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
      direction
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const onUpdateMessages = `subscription OnUpdateMessages {
  onUpdateMessages {
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
      direction
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const onDeleteMessages = `subscription OnDeleteMessages {
  onDeleteMessages {
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
      direction
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile {
  onUpdateProfile {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
export const onCreateTrophy = `subscription OnCreateTrophy {
  onCreateTrophy {
    id
    name
    image
  }
}
`;
export const onUpdateTrophy = `subscription OnUpdateTrophy {
  onUpdateTrophy {
    id
    name
    image
  }
}
`;
export const onDeleteTrophy = `subscription OnDeleteTrophy {
  onDeleteTrophy {
    id
    name
    image
  }
}
`;
