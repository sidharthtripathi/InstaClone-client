import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from './pages/Home'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    )
}