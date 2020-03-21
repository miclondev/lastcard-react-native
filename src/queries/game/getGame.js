import gql from 'graphql-tag';

export default gql`
  query GetGame($id: ID!, $game: String) {
    game: getGame(id: $id) {
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
      players
    }

    hands: handsByGame(gameId: $game) {
      items {
        id
        myCards
        available
        user
        game {
          id
        }
      }
    }
  }
`;
