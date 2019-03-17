import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost"

import Board from './components/board/Board'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Board />
  </ApolloProvider>
  , document.getElementById('root'))
