import React from 'react'
import Form from '../components/form'

function Login(){
    return(
        <div className="login">
            <div className="form-container">
                <h1>Login</h1>
                <p>Compila il form qui sotto per effettuare il login al tuo account</p>
                <Form 
                    cta="Login" 
                    ctaFallBack="Registrati" 
                    ctaFallBackLink="/signup" 
                    fallBackText="Non hai un account?" 
                    handleSubmit={() => console.log("Submit")}
                />
            </div>
        </div>
    )
}
export default Login