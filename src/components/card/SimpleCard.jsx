import React, { Component, Fragment } from 'react'
import './SimpleCard.css'
import MdEdit from 'react-icons/lib/md/edit'

export default class SimpleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showIcon: false,
      showDetails: false,
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
    console.log("CARD");
    console.log(this.props.content);
    const { id, name, description, user } = this.props.content

    return (
      <Fragment>
        <div className="card"
          onMouseEnter={this.toggleEditIcon}
          onMouseLeave={this.toggleEditIcon}
          onClick={() => this.openDetails(id)}
        >
        <div className="board-line">
          <h2 className="card-title card-text">{name}</h2>
          <MdEdit className={`edit-icon ${this.state.showIcon ? "show" : "hide"}`} />
        </div>
        <div className="board-line">
          <p className="card-description card-text">{description}</p>
          <div className="user-initial">{user.name[0]}</div>
        </div>
        </div>
      </Fragment>
    )
  }
}
