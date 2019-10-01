import React from 'react'
import './GroupTagList.scss'
import GroupTag from '../GroupTag/GroupTag'
import IconAvatar from '../../images/avatar.png'

export default function GroupTagList(props){
  return (
    <div className="group-tag-list">
      {
        props.list && 
        props.list.map((g,i)=>(
          <GroupTag
            key={i}
            username={g.username}
            groupname={g.groupname || `Group Name ${i}`}
            message={g.message}
            howlong={g.howlong}
            avatar={g.avatar || IconAvatar}
          />
        )) 
      }
    </div>
  )
}