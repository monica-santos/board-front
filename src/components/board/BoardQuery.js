import gql from 'graphql-tag'

const BoardData = gql`
  {
    board {
      id
      name
      favorite
      backgroundColor
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