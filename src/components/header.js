import React from 'react'
import Thumbnail from './thumbnail'
import app from '../firebase'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <header>
            <div className="logo-container">
                <NavLink to="/"><Thumbnail src={Logo} alt="Playlist Maker Logo" className="logo-img" /></NavLink>
                <NavLink to="/"><p className="logo-text">Playlist Maker™</p></NavLink>
            </div>
            <ul className="nav">
                <li><NavLink to="/my-playlist">My Playlist</NavLink></li>
                <li><NavLink to="/discovery">Discovery</NavLink></li>
                <li><NavLink to="/new-music-friday">New Music Friday</NavLink></li>
                <li><span></span></li>
                <li><button className="button">Sign Out</button></li>
            </ul>
        </header>
    )
}

export default Header