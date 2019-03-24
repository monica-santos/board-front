import gql from 'graphql-tag'

const ContentData = gql`
  {
    lists {
      id
      name
      cards {
        id
        name
        description
        user {
          name
          username
          email
        }
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
`
export default ContentData
