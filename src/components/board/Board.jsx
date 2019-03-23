import React, { Component } from 'react'
import { Query } from 'react-apollo'

import './style.css'
import BoardData from './BoardQuery'
import List from '../list/List'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Query query={BoardData}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { board } = data
          return (
            <div className="board-container full" style={{ backgroundColor: board.backgroundColor }}>
              <div className="board-header">
              </div>
              <div className="board-content">
                <div className="board-line">
                    <h2>{ board.name }</h2>
                </div>
                <div className="board-line">
                  { board.lists.map(list => <List key={list.id} content={list} />) }
                </div>
              </div>
              <div className="board-footer">
                IT Lab ♥
              </div>
            </div>
          );
        }}
      </Query>
    )
  }
}
