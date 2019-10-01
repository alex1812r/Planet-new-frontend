import React from 'react'
import './MyProfile.scss'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import MyReputation from '../../Components/MyReputation/MyReputation'
import Tabs from '../../Components/Tabs/Tabs'
import GroupTagList from '../../Components/GroupTagList/GroupTagList'
import AvailablesList from '../../Components/AvailablesList/AvailablesList'

export default class MyProfile extends React.Component{
  render(){
    return(
      <div id="my-profile">
        
        <section>
          <div> 
            <ProfileCard />
          </div>

          <div>
            <MyReputation />
          </div>
        </section>

        <section>
          <div>
            <Tabs
              selected={1}
              tabs={[
                { title: 'PEOPLE' },
                { title: 'GROUPS' },
                { title: 'OPORTUNITIES' },
                { title: 'EXCHANGE' },
              ]}
            >
          
              <GroupTagList
                key={1}
                list={[
                  { username: 'Nicci Trciani', message: 'wrote a new comment', howlong: '10 mins ago in'  },
                  { username: 'George Fields', message: 'wated', howlong: '2 hours ago in' },
                  { username: 'Jones Dernont', message: 'wrote a new comment', howlong: '2 hours ago in'  },
                  { username: 'Jane Doo', message: 'accepted opportunity Organise November 2019 Fund Raiser', howlong: '3 hours ago in' },
                  { username: 'Nicci Trciani', message: 'wrote a new comment', howlong: '10 mins ago in'  },
                  { username: 'George Fields', message: 'wated', howlong: '2 hours ago in' },
                  { username: 'Jones Dernont', message: 'wrote a new comment', howlong: '2 hours ago in'  },
                  { username: 'Jane Doo', message: 'accepted opportunity Organise November 2019 Fund Raiser', howlong: '3 hours ago in' }
  
                  
                ]}
              />
  
            </Tabs>
          </div>

          <div>

            <AvailablesList 
              list={[
                { name: 'Lindsey Stroud', avatar:true, avaible:true },
                { name: 'George Fields', avatar:true, avaible:true },
                { name: 'Nicci Troiani', avatar:true, avaible:false },
                { name: 'Rebecca Moore', avatar:true, avaible:false },
                { name: 'Jones Dermot', avatar:true, avaible:false },
                { name: 'Jane Doe', avatar:true, avaible:false}
              ]}
            />

          </div>
        </section>
        
        

      </div>
    )
  }
} 