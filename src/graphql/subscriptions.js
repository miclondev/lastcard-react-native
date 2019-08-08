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
  }
}
`;
