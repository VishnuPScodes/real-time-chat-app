
import React from 'react'
import './profile.css'

function ProfilePage() {
    return (
        <div className='profile-container'>
            <div className="name_container">
                <div className="image"></div>
                <div className="name_text">Vishnu PS</div>
            </div>
            <div className="participants_name">
                234 Participants
            </div>
            <div className='single-chat' >
                <div className='image-head'>
                    <img height={'100%'} width={'100%'} style={{ borderRadius: "50%" }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                </div>
                <div className='participant-box'>
                    <div className='user-name'> Vishnu </div>
                    <div className="admin">Admin</div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage