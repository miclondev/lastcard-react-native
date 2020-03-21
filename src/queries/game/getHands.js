import gql from 'graphql-tag';

export default gql`
  query handsByGame($game: String) {
    handsByGame(gameId: $game) {
      items {
        id
        myCards
        available
        game {
          id
        }
      }
    }
  }
`;
