import gql from 'graphql-tag'

const BoardData = gql `
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
export default BoardData