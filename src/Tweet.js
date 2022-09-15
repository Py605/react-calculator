import React from 'react'

function Tweet({name,likes,text}) {
  return (
    <div>
      <p>{name}</p>
      <p>{text}</p>
      <p>{likes}</p>
    </div>
  )
}

export default Tweet