import './InfoCard.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '~/components/ProfileModal'
import * as UserApi from '~/api/UserRequests'
import { logout } from '../../actions/AuthActions'

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const [modalOpened, setModalOpened] = useState(false)
  const [profileUser, setProfileUser] = useState({})

  const {user} = useSelector((state)=>state.authReducer.authData)
  const profileUserId = params.id

  useEffect(()=>{
    const fetchProfileUser = async() => {
      if (profileUserId === user._id) {
        setProfileUser(user)
      } else {
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser()
  }, [user])

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <div className="info-card">
      <div className="info-head">
        <h4>Profile Info</h4>
        {
          profileUserId === user._id
          ? <div>
              <UilPen
              width="3.2rem"
              height="1.92rem"
              onClick={()=> setModalOpened(true)}
              />
              <ProfileModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                data = {user}
              />
            </div>
          : ""
        }
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className="button logout-btn" onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard;