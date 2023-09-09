import {atom} from "recoil"
import { v4 as uuidv4 } from 'uuid';
export const connectionState = atom({
	key : uuidv4(),
	default : false
})