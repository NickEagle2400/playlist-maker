import React from 'react'
import { NavLink } from 'react-router-dom'

function Login(){
    return(
        <div className="login">
            <div className="form-container">
                <h1>Login</h1>
                <p>Compila il form qui sotto per effettuare il login al tuo account</p>
                <form>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    <button type="submit" className="button primary">Login</button>
                    <p>Non hai un account? <NavLink to="/signup">Registrati</NavLink></p>
                </form>
            </div>
        </div>
    )
}
export default Login