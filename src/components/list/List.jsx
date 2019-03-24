import React, { Component } from 'react'
import MdKeyboardControl from 'react-icons/lib/md/keyboard-control';
import './List.css'
import SimpleCard from '../card/SimpleCard'
import AddCard from '../card/AddCard'

class List extends Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render() {
    const { id, name, cards } = this.props.content
    return (
      <div className="board-list">
        <div className="board-line list-header">
          <h4>{name}</h4>
          <span onClick={() => console.log('clicou')}><MdKeyboardControl /></span>
        </div>
        { cards.map(card => <SimpleCard key={card.id} content={card} />) }
        <AddCard refresh={this.props.refresh} listId={id} />
      </div>
    )
  }
}

export default List
