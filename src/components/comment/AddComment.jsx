import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import AddOrUpdateComment from './AddOrUpdateCommentMutation'

class AddComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.content
    }
    this.saveComment = this.saveComment.bind(this)
  }

  saveComment(add) {
    if (this.state.name.length > 2) {
      const { userId, content, cardId } = this.state
      const datetime = new Date().toLocaleString()
      add({ variables: { userId, datetime, content, cardId } })
    }
  }

  render() {
    return (
      <Mutation
        onCompleted={this.props.refresh}
        mutation={AddOrUpdateComment}>
        {(addOrUpdateComment, {data}) => (
          <div className="add-card card">
            <div className="board-line">
              <form
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.keyCode === 13) {
                    this.saveComment(addOrUpdateComment);
                  }
                }}
                onSubmit={e => {
                  e.preventDefault();
                  this.saveComment(addOrUpdateComment);
                }}>
                <input
                  type="text"
                  placeholder=""
                  value={this.state.content}
                  onChange={(e) => this.setState({ ...this.state, text: e.target.value })} />
              </form>
            </div>
          </div>

        )}
      </Mutation>
    )
  }
}

export default AddComment
