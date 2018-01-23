import React from 'react'

const ValidationComponent = (props) => {
  let paragraph = 'Text long enough'

  if(props.inputLength <= 5) {
    paragraph = 'Text too short'
  }

  return (
    <div>
      <p>{paragraph}</p>
    </div>
  )
}

export default ValidationComponent
