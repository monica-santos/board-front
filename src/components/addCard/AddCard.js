import gql from 'graphql-tag'

const BoardData = gql`
  mutation AddTodo($name: String!, $description: String, $listId: ID!, $labelId: ID, $userId: ID) {
    addCard(name: $name, description: $description, listId: $listId, labelId: $labelId, userId: $userId, ) {
      id
    }
  }
`
export default BoardData