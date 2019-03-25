import PropTypes from 'prop-types'
import { Modal, Button, Form, FormControl } from 'react-bootstrap';
import React, { Component } from 'react'
// import FormControl from 'react-bootstrap/FormControl'

class DetailsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.content
    }
  }
  render() {
    console.log(this.state)
    return (
      <Modal show={this.props.showDetails} onHide={this.props.handleCloseDetails}>
        <Modal.Body>
          <Form onSubmit={() => console.log(this.state)}>
            <Form.Control type="text" value={this.state.name} />
            <FormControl as="textarea" aria-label="With textarea" value={this.state.description} />
            {/* { this.state.comments.map(comment => <Comentario comment={comment} /> )}
            <AddComment /> */}
            <Button type="submit">Salvar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

DetailsCard.propTypes = {
  content: PropTypes.object.isRequired
}

export default DetailsCard