import gql from "graphql-tag"

export default gql`
query handsByGame ($game: String, $user: String){
  handsByGame(gameId: $game, user:{
    eq: $user
  }){
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
`
