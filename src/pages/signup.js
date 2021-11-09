import React from 'react'
import Form from '../components/form'

function SignUp(){
    return(
        <div className="login">
            <div className="form-container">
                <h1>Signup</h1>
                <p>Compila il form qui sotto per creare un nuovo account</p>
                <Form 
                    cta="Registrati" 
                    ctaFallBack="Login" 
                    ctaFallBackLink="/login" 
                    fallBackText="Hai già un account?" 
                    handleSubmit={() => console.log("Submit")}
                />
            </div>
        </div>
    )
}
export default SignUp