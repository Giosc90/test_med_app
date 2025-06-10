import React, { useState } from 'react'
import ProfileForm from '../ProfileForm/ProfileForm'
import "./ProfileCard.css"
import ReportsLayout from '../ReportsLayout/ReportsLayout'

const ProfileCard = ({setShowDropdown}) => {
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showReports, setShowReports] = useState(false)

  const handleEditProfile = () => {
    if (showReports) {
      setShowReports(false)
    }
    setShowEditProfile(true)
  }
  const handleShowReports = () => {
    if (showEditProfile) {
      setShowEditProfile(false)
    }
    setShowReports(true)
  }
  return (
    <div className="profile-card">
          
          {showEditProfile ? <ProfileForm setShowEditProfile={setShowEditProfile}/> : <button className="btn4" onClick={handleEditProfile}>Edit Profile</button> }
          {showReports ? <ReportsLayout setShowReports={setShowReports}/> : <button className="btn4" onClick={handleShowReports}>View Reports </button>}
                
    </div>
  )
}

export default ProfileCard