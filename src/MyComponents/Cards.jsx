import React from 'react'

function Cards (props){
    return (
  <>
      <div className="card">
        <div className="card-img">
            <img src={props.image} alt="" />
        </div>
        <div className="card-heading">
        {props.title}
        </div>
        <div className="card-desc">
        {props.desc}
        </div>
      </div>
   
      </>  
    )
  }
export default Cards