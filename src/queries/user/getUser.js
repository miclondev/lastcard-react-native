import gql from "graphql-tag"

export default gql`
    query GetProfile($id: ID!) {
      getProfile(id: $id) {
        id
      }
    }
`