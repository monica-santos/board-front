import gql from 'graphql-tag'

const AddOrUpdateComment = gql `
  mutation AddOrUpdateComment($id: ID, $userId: ID!, $datetime: String, $content: String!, $cardId: ID) {
    addOrUpdateComment(id: $id, userId: $userId, datetime: $datetime, content: $content, cardId: $cardId) {
      id
    }
  }
`
export default AddOrUpdateComment