import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.comment
    }

  }

  render() {
    return (
      <Fragment>
        <div className="comment">
          {this.state.content}
          <div className="comment-footer">
          {this.state.user.name} - {this.state.datetime}
          </div>
        </div>
      </Fragment>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
