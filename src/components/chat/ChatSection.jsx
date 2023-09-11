import React, { useEffect} from 'react'
import Sender from './Sender'
import Reciever from './Reciever'
import { v4 as uuidv4 } from 'uuid'
import { activeChatState } from '../../state/atoms/activeChatState'
import { convoSelector } from "../../state/selectors/convoSelector"
import { useRecoilValue } from 'recoil'
function ChatSection() {
  const activeUser = useRecoilValue(activeChatState)
  const activeId = activeUser.userId;
  const convos = useRecoilValue(convoSelector)
  const currentChats = convos[activeId];
  const revChats = [];
  if(currentChats)
  for(let i = currentChats.length-1  ; i>=0 ; i--) revChats.push(currentChats[i])
  return (

    <>

      {
        activeId ?
          <div id = "container" key={uuidv4()} className='grow flex flex-col-reverse overflow-y-scroll text-white'>
            {
              revChats.map(chat => (
                <div className = 'grid' key={uuidv4()}>
                  {chat.reciever._id === activeId ?
                    <Sender key={uuidv4()} value={chat.message} /> :
                    <Reciever key={uuidv4()} value={chat.message} />

                  }
                </div>
              ))
            }
          </div> :
          <div key={uuidv4()} style={{ backgroundImage: `url("/bgd.png")`, backgroundPosition: "center" }} className='grow flex flex-col text-2xl font-bold justify-center items-center overflow-y-scroll text-white'>
            Select a Chat
          </div>}

    </>

  )
}


export default ChatSection