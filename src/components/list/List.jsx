import React, { Component } from 'react'
import MdKeyboardControl from 'react-icons/lib/md/keyboard-control';
import './style.css'
import SimpleCard from '../card/SimpleCard'
import AddCard from '../addCard/AddCard'

class List extends Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render() {
    const { id, name, cards } = this.props.content
    return (
      <div className="board-list">
        <div className="board-line">
          <h4>{name}</h4> <MdKeyboardControl />
        </div>
        { cards.map(card => <SimpleCard key={card.id} content={card} />) }
        <AddCard refresh={this.props.refresh} listId={id} />
      </div>
    )
  }
}

export default List
