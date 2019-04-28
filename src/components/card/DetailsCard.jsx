import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'
import React, { Component } from 'react'
import { Mutation } from "react-apollo"
import AddOrUpdateCard from './AddOrUpdateCardMutation'
import Comment from "../comment/Comment"
import "./DetailsCard.css"

class DetailsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.content
    }

    this.updateCard = this.updateCard.bind(this)
  }

  updateCard(update) {
    const { id, name, description, listId, user } = this.state
    
    if (name.length > 2) {
      const userId = user ? user.id : null
      update({ variables: { id, name, description, listId, userId }})
    }
  }

  render() {
    return (
      <Mutation  
        mutation={AddOrUpdateCard}
        onCompleted={() => {
          this.props.refresh()
          this.props.handleCloseDetails()
        }}
        > 
        {(addOrUpdateCard, {data}) => (
          <Modal show={this.props.showDetails} onHide={this.props.handleCloseDetails}>
            <Modal.Body>
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  this.updateCard(addOrUpdateCard)}}
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.keyCode === 13) {
                    this.updateCard(addOrUpdateCard)
                  }}}>
                <Form.Control
                  type="text" defaultValue={this.state.name}
                  onChange={e => this.setState({...this.state, name: e.target.value})}
                />
                <Form.Control as="textarea" aria-label="With textarea"
                  defaultValue={this.state.description || ""}
                  onChange={e => this.setState({...this.state, description: e.target.value})}
                />

                <div>
                  {this.state.comments.length ? 'Comentários' : null}
                { this.state.comments.map(comment => <Comment key={comment.id} comment={comment} /> ) }
                </div>
                <Button type="submit">Salvar</Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Mutation>
    )
  }
}

DetailsCard.propTypes = {
  content: PropTypes.object.isRequired
}

export default DetailsCard