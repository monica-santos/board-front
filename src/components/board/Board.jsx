import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { css } from '@emotion/core';  
import { ClipLoader } from 'react-spinners';

import './Board.css'
import BoardData from './BoardQuery'
import UserIcon from '../user/UserIcon'
import Content from '../content/Content'

const override = css`
    display: block;
    margin: calc(25% - 150px) calc(100vh - 150px);
    position: absolute;
`;

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <Query query={BoardData}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div className='sweet-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={true}
                />
            </div>
          )}
          if (error) return `Error! ${error.message}`;
          const { board } = data
          const backgroundImage = require(`../../background-images/${board.backgroundImage}`);
          return (
            <div className="board-container full" style={
              { backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: '50%',
                backgroundSize: 'cover'
              }}>
              <div className="board-header">
                <h2>{ board.name }</h2>
                  { board.users.map(user => <UserIcon user={user} key={user.id} />) }
              </div>
              <Content />
              <div className="board-footer">
                IT Lab <span role="img" aria-label="Fire">🔥</span>
              </div>
            <div className='sweet-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={loading}
              />
            </div>
              </div>
          );
        }}
      </Query>
    )
  }
}

export default Board