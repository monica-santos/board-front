import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MdKeyboardControl from 'react-icons/lib/md/keyboard-control';

import SimpleCard from '../card/SimpleCard'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render() {
    console.log(this.props.content)
    const { id, name, cards } = this.props.content
    return (
      <Fragment>
        <Row>
          <h4>{name}</h4> <MdKeyboardControl />
        </Row>
        { cards.map(card => {
          return (
            <Col key={card.id}>
              <SimpleCard content={card} />
            </Col>
            )
          })}

      </Fragment>
    )
  }
}
