import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import MyPlaylist from './pages/myplaylist'
import NewMusicFriday from './pages/newmusicfriday'
import Discovery from './pages/discovery'
import Header from './components/header'
import Footer from './components/footer'

import './css/style.css'

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/my-playlist" element={<MyPlaylist />} />
        <Route exact path="/discovery" element={<Discovery />} />
        <Route exact path="/new-music-friday" element={<NewMusicFriday />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;