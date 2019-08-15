// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
    playersProfile {
      items {
        id
        name
        image
        userID
        followers
        following
        gamesWon
        gemesLost
        ranking
        last_played_on
        inGame
        lastAvailable
        points
        level
        canBeChallenged
      }
      nextToken
    }
    diretion
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
    playersProfile {
      items {
        id
        name
        image
        userID
        followers
        following
        gamesWon
        gemesLost
        ranking
        last_played_on
        inGame
        lastAvailable
        points
        level
        canBeChallenged
      }
      nextToken
    }
    diretion
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
    playersProfile {
      items {
        id
        name
        image
        userID
        followers
        following
        gamesWon
        gemesLost
        ranking
        last_played_on
        inGame
        lastAvailable
        points
        level
        canBeChallenged
      }
      nextToken
    }
    diretion
  }
}
`;
export const createHand = `mutation CreateHand($input: CreateHandInput!) {
  createHand(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    playerNumber
  }
}
`;
export const updateHand = `mutation UpdateHand($input: UpdateHandInput!) {
  updateHand(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    playerNumber
  }
}
`;
export const deleteHand = `mutation DeleteHand($input: DeleteHandInput!) {
  deleteHand(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    playerNumber
  }
}
`;
export const createMessages = `mutation CreateMessages($input: CreateMessagesInput!) {
  createMessages(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const updateMessages = `mutation UpdateMessages($input: UpdateMessagesInput!) {
  updateMessages(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const deleteMessages = `mutation DeleteMessages($input: DeleteMessagesInput!) {
  deleteMessages(input: $input) {
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
      playersProfile {
        nextToken
      }
      diretion
    }
    gameId
    user
    content
    sentOn
  }
}
`;
export const createProfile = `mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
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
export const updateProfile = `mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
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
export const deleteProfile = `mutation DeleteProfile($input: DeleteProfileInput!) {
  deleteProfile(input: $input) {
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
export const createTrophy = `mutation CreateTrophy($input: CreateTrophyInput!) {
  createTrophy(input: $input) {
    id
    name
    image
  }
}
`;
export const updateTrophy = `mutation UpdateTrophy($input: UpdateTrophyInput!) {
  updateTrophy(input: $input) {
    id
    name
    image
  }
}
`;
export const deleteTrophy = `mutation DeleteTrophy($input: DeleteTrophyInput!) {
  deleteTrophy(input: $input) {
    id
    name
    image
  }
}
`;
