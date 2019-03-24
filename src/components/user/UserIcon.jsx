import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './UserIcon.css'

export default class UserIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

    this.getInitials = this.getInitials.bind(this)
  }

  getInitials(user) {
    const indexedName = user.name.split("")
    let initials = indexedName[0]
    const spaceIndex = indexedName.indexOf(" ")
    if (spaceIndex > 0) {
      initials += indexedName[spaceIndex + 1]
    }
    return initials
  }

  render() {
    const { user } = this.props
    
    if (!user) {
      return null
    }

    const initials = this.getInitials(user);

    const popover = (
      <Popover id="popover-basic" title={user.name}>
        {user.username}<br />
        {user.email}
      </Popover>
    );
    
    return (
      <OverlayTrigger placement="right" overlay={popover}>
        <div className="user-initial">
          {initials}
        </div>
      </OverlayTrigger>
    )
  }

}
