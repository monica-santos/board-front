import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import AddCardMutation from './AddCard'
import './AddCard.css'

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }

    this.toggleEditIcon = this.toggleEditIcon.bind(this)
    this.openDetails = this.openDetails.bind(this)
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
  }

  toggleEditIcon() {
    this.setState({...this.state, showIcon: !this.state.showIcon})
  }

  openDetails() {
    this.setState({
      ...this.state,
      showDetails: true
    })
  }

  handleCloseDetails() {
    this.setState({
      ...this.state,
      showDetails: false
    })
  }

  render() {
    return (
      <Mutation
        onCompleted={this.props.refresh}
        mutation={AddCardMutation}>
        {(addCard, {data}) => (
          <div className="add-card card">
            <div className="board-line">
              <form
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.keyCode === 13) {
                    addCard({ variables: { name: this.state.name, listId: this.props.listId } })
                  }
                }}
                onSubmit={e => {
                  e.preventDefault();
                  addCard({ variables: { name: this.state.name, listId: this.props.listId } })
                }}
              >
                <input
                  type="text"
                  placeholder="Insira um título..."
                  value={this.state.name}
                  onChange={(e) => this.setState({ ...this.state, name: e.target.value })} />
              </form>
            </div>
          </div>

        )}
      </Mutation>
    )
  }
}
