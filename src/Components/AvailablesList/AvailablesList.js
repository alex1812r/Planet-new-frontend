import React from 'react'
import './AvailablesList.scss'
import Tag from '../Tag/Tag'
import Avatar from '../../images/avatar.png'

export default function AvailablesList(props){
  return(
    <div className="availables-list box">
      <div className="availables-list-header">
        <h4>Poeple</h4>
        <div>
          <span><i className="fas fa-stream"></i></span>
          <span><i className="fas fa-ellipsis-v"></i></span>
        </div>
      </div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Availability <span><i className="far fa-comment-alt"></i></span></th>
          </tr>
        </thead>

        <tbody>
          {
            props.list && 
            props.list.length &&
            props.list.map((item,index)=>(
              
              <tr key={index}>
                <td>
                  {
                    item.avatar ?
                    <Tag 
                      col1={<img src={Avatar} alt="No avatar"  className="avatar"/>}
                      col2={item.name}
                    />
                    :  item.name 
                  }
                </td>
                
                <td>{
                  item.avaible ? <span className="active">Online</span>
                  : 'No  avaible'
                }
                <button type="button" className="btn-to-chat">
                  <i className="far fa-comment-alt"></i>
                </button>
                </td>
              </tr>

            ))  
          }
        </tbody>
      </table>
    </div>
  )
}