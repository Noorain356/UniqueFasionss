import { Routes, Route, useLocation } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './component/Nav'

function App() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && <Nav />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Registration />} />
            </Routes>
        </>
    )
}

export default App
