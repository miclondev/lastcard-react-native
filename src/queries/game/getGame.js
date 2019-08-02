import gql from "graphql-tag"

export default gql`
query GetGame($id: ID!) {
        getGame(id: $id) {
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
        onPlay {
            value
            suit
            image
        }
    }
}
`