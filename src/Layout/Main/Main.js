import React from 'react'
import {Switch,Route} from 'react-router-dom'
import './Main.scss'
import MyProfile from '../../views/MyProfile/MyProfile'

export default function Main(){
  return(
    <main id="main">
      <Switch>
        <Route>
          <MyProfile />
        </Route>
      </Switch>
    </main>
  )
}