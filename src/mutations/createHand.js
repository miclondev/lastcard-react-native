import gql from "graphql-tag"

export default gql`
    mutation CreateHand(
        $game: ID, 
        $user: String,
        $number: Int,
        $gameId: String,
        $cards: [Int]
          ) {
        createHand(input: {
            handGameId: $game
            user: $user
            playerNumber: $number
            gameId: $gameId
            available: $cards
            myCards: $cards
        }){
        id
        user
        myCards
    }
}
`