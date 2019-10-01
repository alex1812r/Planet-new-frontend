import React from 'react'
import './Tag.scss'

export default function Tag(props){
  return(
    <div className="tag">
      <div> {props.col1} </div>
      <div> {props.col2} </div>
    </div>
  ) 
}