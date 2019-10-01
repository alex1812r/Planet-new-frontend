import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './Layout.scss'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
import Footer from './Footer/Footer'

export default function Layout(){
  return(
    <div id="layout">
      <BrowserRouter>
        <div id="layout-wrap">
          <Sidebar />
          <Content />
        </div>
    
        <Footer />
      </BrowserRouter>
    </div>
  )
}