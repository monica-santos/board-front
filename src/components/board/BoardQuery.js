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
      }
      lists {
        id
        name
        cards {
          id
          name
          description
          comments {
            id
            content
            datetime
            user {
              id
              name
            }
          }
        }
      }
    }
  }
`
export default BoardData