import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './FollowersCard.css'
import { FollowersData } from '~/Data'
import Followers from '../Followers/Followers'
import { getAllUser } from '../../api/UserRequests'

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="followers-card">
      <h4>People you may know</h4>

        {persons.map((person, id)=>{
          if (person._id !== user._id)
            return(<Followers person={person} key={id}/>)
        })}
    </div>
  )
}

export default FollowersCard