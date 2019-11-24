import gql from 'graphql-tag';

export default gql`
  query GamesByUser($user: String) {
    handsByUser(user: $user) {
      items {
        id
        game {
          id
          title
          gameType
          playerCount
          finished
          started
          started_on
          private
        }
      }
    }
  }
`;
