import React from 'react'
import './ProfileCard.scss'
import Familia from '../../images/familia.jpg'
import IconAvatar from '../../images/avatar.png'
import Tag from '../Tag/Tag'

export default function ProfileCard(props){
  const Avatar = <img src={IconAvatar} alt="No Avatar" className="avatar" />
  
  const ContentMeta = 
    <div id="profile-card-content-meta">
      <div>
        <span>@Username</span>
        <span>Full Name</span>
      </div>
      <button type="button" onClick={props.activeEdit}>
        <i className="fas fa-pen"></i>
      </button>
    </div>

  return(
    <div id="profile-card">
    
      <div id="profile-card-image">
          <img src={Familia} alt="No ProfileImage"/>
      </div>

      <div id="profile-card-content" className="box">
        <Tag 
          col1={Avatar}
          col2={ContentMeta}
        />
        <p>
          Phasellus mi nisl, maximus in pulvinar eu, elementum vitae nulla. Donec imperdiet lacinia ornare. Quisque dolor turpis, imperdiet ut purus a, dignissim porttitor nulla. Maecenas non tellus dolor. Vestibulum non dapibus tellus. Maecenas neque metus, mollis sed facilisis eget, consectetur eget erat. Donec placerat urna urna, vitae faucibus ante efficitur nec. Cras fermentum vitae massa vel volutpat. 
        </p>
      </div>

    </div>
  )
}
