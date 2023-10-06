
import React from 'react'
import './landing.css'
import Chat from '../ChatPage/Chat'
import ProfilePage from '../ProfilePage/ProfilePage'
function LandingPage() {
    return (
        <div className='container-l'>
            <div className='single-chat' >
                <div className='image-head'>
                    <img height={'100%'} width={'100%'} style={{ borderRadius: "50%" }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                </div>
                <div>
                    <div className='user-name'> Vishnu </div>
                    <div className='message'>sndjsdsdhsdhsgdhsgdhsgdhsgdhsgdhsgdhsgdhdhsghsgdhgshdghs</div>
                </div>

            </div>
            <div>
                <Chat />
                {/* <ProfilePage /> */}
            </div>
        </div>
    )
}

export default LandingPage