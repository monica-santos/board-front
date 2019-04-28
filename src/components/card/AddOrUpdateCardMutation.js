import gql from 'graphql-tag'

const AddOrUpdateCard = gql `
  mutation AddOrUpdateTodo($id: ID, $name: String!, $description: String, $listId: ID!, $labelId: ID, $userId: ID) {
    addOrUpdateCard(id: $id, name: $name, description: $description, listId: $listId, labelId: $labelId, userId: $userId, ) {
      id
    }
  }
`
export default AddOrUpdateCard