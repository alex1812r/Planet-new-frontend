import React from 'react'
import './RangeStars.scss'

export default function RangeStars(props){
  const reputation = props.reputation ? props.reputation : 0
  const Stars = [{},{},{},{},{}]
  return(
    <div className={`range-stars ${props.className || ''}`}>
      {
      Stars.map((s,i)=>(
        i < reputation ?
        <Star  key={i} className="active"/>
        : <Star key={i} />
      ))
    }
    </div>
  )
}

const Star = ({className}) => (
  <span className={className}>
    <i className="fas fa-star"></i>
  </span>
)