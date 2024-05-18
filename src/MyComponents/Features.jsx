import React from 'react'

function Features(props) {
  return (
    <>
        <div className="message">{props.message}</div>
        <div className="feature-image"><img src={props.image} alt="" /></div>
    </>
  )
}

export default Features