import React, { useContext } from 'react'
import video from "../img/video.png"
import addUser from "../img/addUser.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src={video} alt="" />
                <img src={addUser} alt="" />
                <img src={more} alt="" />
            </div>
        </div>
            <Messages/>
            <Input/>
    </div>
  )
}

export default Chat