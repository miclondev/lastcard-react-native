import gql from "graphql-tag"

export default gql`
query GetGame($id: ID!) {
        getGame(id: $id) {
            id
            title
            playerCount
            winner
            createdBy
            startCards
            gameType
            private
            finished
            started
            cards
            onPlay
            user
    }
}
`