import gql from 'graphql-tag'

const Comments = gql `
  {
    board {
      id
      name
      favorite
      backgroundImage
      users {
        id
        name
        username
        email
      }
    }
  }
`
export default Comments