import React from 'react'
import {NavLink} from 'react-router-dom'

function SignUp(){
    return(
        <div className="login">
            <div className="form-container">
                <h1>Signup</h1>
                <p>Compila il form qui sotto per creare un nuovo account</p>
                <form>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    <button type="submit" className="button primary">Registrati</button>
                    <p>Hai già un account? <NavLink to="/login">Login</NavLink></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp