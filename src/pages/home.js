import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return(
            <div className="homepage">
                <h1>Create Your Playlist</h1>
                <p>Iscriviti e crea la tua playlist scegliendo tra milioni di canzoni</p>
                <div>  
                    <Link className="button primary" to="/signup">Signup</Link>
                    <Link className="button" to="/login">Login</Link>
                </div>
            </div>
    )
}
export default Home