import gql from "graphql-tag"

export default gql`
    mutation CreateGame(
        $title: String
        $players: Int
        $createdBy: String
        $gameType: String
        $private: Boolean
        $started_on: String
    ) {
        createGame(input: {
            title: $title
            playerCount: $players
            createdBy: $createdBy
            gameType: $gameType
            private: $private
            started_on: $started_on
        }) {
        id
        title
        playerCount
        createdBy
        gameType
        private
        started_on
        }
    }
`