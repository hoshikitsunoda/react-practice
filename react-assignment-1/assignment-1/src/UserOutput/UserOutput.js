import React from 'react'

const UserOutput = (props) => {
  return (
    <div>
      <p>User: {props.userName}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default UserOutput
