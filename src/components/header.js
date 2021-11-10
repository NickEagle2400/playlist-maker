import React, {useContext} from 'react'
import Thumbnail from './thumbnail'
import { getAuth } from '@firebase/auth'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth'


function Header() {

    const {currentUser} = useContext(AuthContext)

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
                {currentUser ? <li><button className="button" onClick={() => getAuth().signOut()}>Sign Out</button></li> : <><li><NavLink to="/signup">Signup</NavLink></li><li><NavLink to="/login">Login</NavLink></li></>}
                
            </ul>
        </header>
    )
}

export default Header