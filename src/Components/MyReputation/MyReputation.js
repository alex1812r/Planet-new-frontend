import React from 'react'
import './MyReputation.scss'
import Icon1 from '../../images/ICON 1.png'
import Icon2 from '../../images/ICON 2.png'
import RangeStars from '../RangeStars/RangeStars'
import BadgesGroup from '../BadgesGroup/BadgesGroup'

export default function MyReputation(){
  return(
    <div className="box" id="my-reputation">
      <section>
        <h4>My Reputation</h4>

        <div>
          <img src={Icon1} alt="no icon"/>
          <RangeStars 
            reputation={5}
            className="secondary"
          />
        </div>
        
        <div>
          <img src={Icon2} alt="no icon"/>
          <RangeStars
            reputation={3}
          />
        </div>

      </section>

      <div>
        <h4>My Badges</h4>
        <BadgesGroup />
      </div>
    </div>
  )
}