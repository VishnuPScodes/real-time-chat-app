
import React, { useEffect, useState } from 'react'
import './landing.css'
import Chat from '../ChatPage/Chat'
import ProfilePage from '../ProfilePage/ProfilePage'
import axios from 'axios';
function LandingPage() {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:3003/register`).then((e) => {
            setUsers(e.data)
            setLoad(false);
        }).catch((e) => {
            setLoad(false);
        })
    }, [])
    return (
        <div className='container-l'>
            <div className="send_cont">
                <div className="user_pro_div">
                    <div className="user_image"></div>
                </div>
                {load == true ? <div>Loading...</div> :
                    <div className='user-div'>
                        {users.map((e) => {
                            return <div className='single-chat' >
                                <div className='image-head'>
                                    <img height={'100%'} width={'100%'} style={{ borderRadius: "50%" }} src={e.pro_pic} alt="" />
                                </div>
                                <div>
                                    <div className='user-name'>{e.user_name} </div>
                                    <div className='message'>{e.age}</div>
                                </div>

                            </div>
                        })}
                    </div>
                }


            </div>
            <div>
                <Chat />
                {/* <ProfilePage /> */}
            </div>
        </div>
    )
}

export default LandingPage