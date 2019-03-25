import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './SimpleCard.css'
import MdEdit from 'react-icons/lib/md/edit'
import UserIcon from '../user/UserIcon'
import DetailsCard from './DetailsCard'

class SimpleCard extends Component {
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
    console.log(this.props)
    const { id, name, description, user } = this.props.content

    const proptodetail = {
      id,
      name,
      description,
      user,
      comments: [],
      label: 'none'
    }

    return (
      <Fragment>
        <div className="card"
          onMouseEnter={this.toggleEditIcon}
          onMouseLeave={this.toggleEditIcon}
          onClick={() => this.openDetails()}
        >
          <div className="board-line">
            <h2 className="card-title card-text">{name}</h2>
            <MdEdit className={`edit-icon ${this.state.showIcon ? "show" : "hide"}`} />
          </div>
          <div className="board-line">
            <p className="card-description card-text">{description}</p>
            <div className="user-position"><UserIcon user={user} /></div>
          </div>
        </div>
        <DetailsCard
          showDetails={this.state.showDetails}
          handleCloseDetails={this.handleCloseDetails}
          content={proptodetail} />
      </Fragment>
    )
  }
}

SimpleCard.propTypes = {
  content: PropTypes.object
}

export default SimpleCard
