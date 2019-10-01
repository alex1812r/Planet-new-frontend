import React from 'react'
import './Sidebar.scss'
import Logo from '../../images/Logo.png'

export default class Sidebar extends React.Component{
  state={
    show: true
  }

  handlerToShow = () => {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  render(){
    return(
      <aside id="sidebar" className={`${this.state.show ? 'active' : ''}`}>
        <button
          id="sidebar-check"
          onClick={this.handlerToShow}
        >
          {
            this.state.show ? 
            <i className="far fa-arrow-left"></i>
            : <i className="fas fa-bars"></i>
          }
        </button>

        <div id="sidebar-wraper">
          <div id="sidebar-header">
            <img src={Logo} alt="Planet Logo"/>
          </div>
          
          <section>
            <button className="btn-secondary"><i className="fas fa-plus"></i> Action</button>
            <a href="/"><i className="fas fa-columns"></i> Dashboard</a>
            <a href="/"><i className="fas fa-arrows-alt-h"></i> Opportunities</a>
            <a href="/"><i className="fas fa-arrows-alt-h"></i> My Reputation</a>
            <a href="/"><i className="fas fa-globe-europe"></i> My Community</a>
          </section>

          <section>
            <h4>Network</h4>
            <a href="/"><i className="fas fa-user-friends"></i> People</a>
            <a href="/"><i className="fas fa-users"></i>   My Group
            <span><i className="fas fa-caret-right"></i></span>
            </a>
            <a href="/"><i className="fas fa-comment-alt"></i> Chats</a>
          </section>

          <section>
            <h4>Settings</h4>
            <a href="/"><i className="fas fa-user"></i>  Profile</a>
            <a href="/"><i className="fas fa-briefcase"></i> PlaNET Account</a>
            <a href="/"><i className="fas fa-cog"></i> Preferences</a>
          </section>

        </div>
      </aside>
    )
  }
}