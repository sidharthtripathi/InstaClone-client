import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Chat from './pages/Chat'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path = '/:id' element = {<Profile/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/chat' element={<Chat/>} />
        </Routes>
    )
}