import gql from "graphql-tag"

export default gql`
    mutation CreateGame(
        $title: String!
        $playerCount: Int!
        $user: String
        $gameType: String
        $private: Boolean
        $started_on: AWSDateTime
        $started: Boolean
        $finished: Boolean
        $players: [String]
    ) {
        createGame(input: {
            title: $title
            playerCount: $playerCount
            user: $user
            gameType: $gameType
            private: $private
            started_on: $started_on
            started: $started
            finished: $finished
            players: $players
        }) {
        id
        title
        gameType
        playerCount
        finished
        started
        started_on
        private
        players
        }
    }
`