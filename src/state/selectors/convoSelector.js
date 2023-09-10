import { chatdbState } from "../atoms/chatdbState";
import {selector} from 'recoil'

import { v4 as uuidv4 } from 'uuid';
export const convoSelector = selector({
    key : uuidv4(),
    get : ({get})=>{
        const myId = localStorage.getItem('userId');
        const db = get(chatdbState);
        const convos = {};
        for(let i = 0 ; i<db.length ; i++){
            // if you are sender, push msg in reciever
             if(db[i].sender._id===myId){
                // if reciever does not yet exist
                if(!convos[db[i].reciever._id]) convos[db[i].reciever._id] = [db[i]];
                else convos[db[i].reciever._id].push(db[i])
             }
             //  if you are reciver
             else if(db[i].reciever._id === myId){
                if(!convos[db[i].sender._id]) convos[db[i].sender._id] = [db[i]];
                else convos[db[i].sender._id].push(db[i])
             }

        }
        return convos;
    }
})