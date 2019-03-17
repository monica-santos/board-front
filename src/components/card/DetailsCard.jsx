import { Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react'

export default class DetailsCard extends Component {
  render() {
    const { name, description, listName, user, comments, label } = this.props.content
    return (
      <Modal show={this.props.showDetails} onHide={this.props.handleCloseDetails}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
        </Modal>
    )
  }
}
