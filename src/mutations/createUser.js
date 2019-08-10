import gql from "graphql-tag"

export default gql`mutation CreateProfile(
    $id: ID
    $name: String
    $userID: String
    $image: String
){
    createProfile(input: {
        id: $id
        name: $name
        image: $image
        userID: $userID
    }) {
      id
      name
      image
      userID
    }
  }
  `;