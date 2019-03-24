import React, { Component } from 'react'
import { Query } from 'react-apollo'

import './style.css'
import ContentQuery from './ContentQuery'
import List from '../list/List'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <Query query={ContentQuery}>
        {({ loading, error, data, refetch }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`;
          const { lists } = data
          return (
            <div className="board-content">
              <div className="board-line">
                { lists.map(list => <List className="board-list" key={list.id} content={list} refresh={refetch} />) }
              </div>
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Content
