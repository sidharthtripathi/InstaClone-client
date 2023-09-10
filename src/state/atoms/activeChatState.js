import {atom} from "recoil"
import { v4 as uuidv4 } from 'uuid';
export const activeChatState = atom({
	key : uuidv4(),
	// contains
	// userId, username, avatar
	default : {}
})