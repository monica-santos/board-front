import React from 'react'
import './UserIcon.css'
export default function UserIcon(props) {
  const { user } = props
  if (!user) {
    return null
  }
  const indexedName = user.name.split("")
  let initials = indexedName[0]
  const spaceIndex = indexedName.indexOf(" ")
  if (spaceIndex > 0) {
    initials += indexedName[spaceIndex + 1]
  }
  return (
    <div className="user-initial">
      {initials}
    </div>
  )
}
