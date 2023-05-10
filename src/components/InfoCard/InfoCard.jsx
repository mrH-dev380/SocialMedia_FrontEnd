import './InfoCard.css'
import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '~/components/ProfileModal'

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="info-card">
      <div className="info-head">
        <h4>Your Info</h4>
        <div>
          <UilPen
           width="3.2rem"
           height="1.92rem"
           onClick={()=> setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In a Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Ho Chi Minh City</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Home</span>
      </div>

      <button className="button logout-btn">Logout</button>
    </div>
  )
}

export default InfoCard;