import React from 'react'
import './BadgesGroup.scss'

import Badge1 from '../../Icons/Badges/Badge 1.png'
import Badge2 from '../../Icons/Badges/Badge 2.png'
import Badge3 from '../../Icons/Badges/Badge 3.png'
import Badge4 from '../../Icons/Badges/Badge 4.png'

export default function BadgesGroup(props){
  const badges = [
    {name:'Badge1',icon: Badge1,},{name:'Badge2',icon: Badge2},
    {name:'Badge3',icon: Badge3},{name:'Badge4', icon: Badge4}
  ]
  return(
    <div className="badges-group">
      {
        badges.map((b,i)=>(
          <Badge
            key={i}
            name={b.name} 
            icon={b.icon} 
          />
        ))
      }
    </div>
  )
}

const Badge = ({icon,name})=>(
  <span>
    <img src={icon} alt={name}/>
  </span>
)