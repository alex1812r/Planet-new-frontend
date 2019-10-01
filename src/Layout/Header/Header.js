import React from 'react'
import './Header.scss'
import Avatar from '../../images/avatar.png'

export default function Header(){
  return(
    <header id="header">
      <div className="input-search">
        <input type="text"/>
        <i className="fas fa-search"></i>
      </div>

      <nav>
        <a href="/"><i className="far fa-calendar"></i></a>
        <a href="/"><i className="far fa-envelope"></i></a>
        <a href="/"><i className="far fa-comment-alt"></i></a>
        <img src={Avatar} alt="logo"/>
      </nav>
    </header>
  )
}