import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className="username">
      <p>User: {props.userName}</p>
      <p>Helloooooo</p>
    </div>
  )
}

export default UserOutput
