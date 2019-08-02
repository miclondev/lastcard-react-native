import gql from "graphql-tag"

export default gql`
    mutation updateGame($cards: [Int], $onPlay: [Int], $id: ID!, $started: Boolean){
        updateGame(input: {
            id: $id
            cards: $cards
            onPlay: $onPlay
            started: $started
        }){
            id
            title
            cards
            onPlay
            started
        }
    }
`