import gql from "graphql-tag"

export default gql`
    query GetHand($id: ID!) {
    getHand(id: $id) {
      id
      myCards
      available
      game {
          id
      }
   }
}
`