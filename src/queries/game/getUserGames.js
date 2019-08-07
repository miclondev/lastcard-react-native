import gql from "graphql-tag"

export default gql`
 query GamesByUser($user: String){
    gamesByUser(user: $user){
       items{
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
`