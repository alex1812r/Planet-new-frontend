import React from 'react'
import './Content.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'

export default function Content(){
  return(
    <div id="wrap-content">
      <div></div>
      <div></div>
      <div id="content">
        <Header />
        <Main />
      </div>
    </div>
  )
} 