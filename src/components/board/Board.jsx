import React, { Component } from 'react'
import { Query } from 'react-apollo'

import './style.css'
import BoardData from './BoardQuery'
import List from '../list/List'

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';


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
            <div className='full' style={{backgroundColor: board.backgroundColor }}>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{ board.name }</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

                <Container>
                  <Row>
                    <Col>
                      <h2>{ board.name }</h2>
                    </Col>
                  </Row>
                  <Row>
                    { board.lists.map(list => {
                      return (
                        <Col key={list.id}>
                          <List content={list} />
                        </Col>
                      )
                    })}
                  </Row>
                </Container>
            </div>
          );
        }}
      </Query>
    )
  }
}
