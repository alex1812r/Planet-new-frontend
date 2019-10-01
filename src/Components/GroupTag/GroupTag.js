import React from 'react'
import './GroupTag.scss' 
import Tag from '../Tag/Tag'

export default function GroupTag(props){
  
  const Avatar = <img src={props.avatar} className="avatar" alt="No Avatar" width="40px" height="40px"/>
  
  const ContentMeta = 
    <div className="group-tag-meta">
      <div>
        <span>
          <h4>{props.username}</h4>
          <span>{props.message}</span>
        </span>

        <span>{props.howlong} <a href="/">{props.groupname}</a></span>
      </div>
      <button type="button" onClick={props.view}>
      <i className="fas fa-ellipsis-v"></i>
      </button>
    </div>

  return(
    <Tag 
      col1={Avatar}
      col2={ContentMeta}
    />
  )
}