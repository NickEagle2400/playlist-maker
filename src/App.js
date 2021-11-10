import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import MyPlaylist from './pages/myplaylist'
import NewMusicFriday from './pages/newmusicfriday'
import Discovery from './pages/discovery'
import Header from './components/header'
import Footer from './components/footer'
import { AuthProvider } from './context/auth';
import PrivateRoute from './components/privateroute';
import { AuthContext } from './context/auth'

import './css/style.css'


function App() {
  return (
    <AuthProvider>
      <Router>

        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/my-playlist" element={<PrivateRoute><MyPlaylist /></PrivateRoute>} />
          <Route exact path="/discovery" element={<PrivateRoute><Discovery /></PrivateRoute>} />
          <Route exact path="/new-music-friday" element={<PrivateRoute><NewMusicFriday /></PrivateRoute>} />
        </Routes>

        <Footer />

      </Router>
    </AuthProvider>
  )
}

export default App;