import React, {useState } from 'react'
import {NavLink, useNavigate } from 'react-router-dom'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

function Form({cta, ctaFallBack, ctaFallBackLink, fallBackText, action}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const auth = getAuth()

    function handleEmailChange(event){
        event.preventDefault()
        setEmail(() =>{
            return event.target.value
        })
    }

    function handlePasswordChange(event){
        event.preventDefault()
        setPassword(() =>{
            return event.target.value
        })
    }
    
    const register = async (event) => {
        event.preventDefault()
        try{
        const user = await createUserWithEmailAndPassword(auth, email, password)
        login(event)
        console.log(user)
        } catch(error) {
            console.log(error)
        }
    }

    const login = async (event) => {
        event.preventDefault()
        try{
        const user = await signInWithEmailAndPassword(auth, email, password)
        navigate("/discovery");
        console.log(user)
        } catch(error) {
            console.log(error)
        }
    }

    const handleClick = action === 'login' ? login : register

    return(
        <form >
            <label>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </label>
            <button className="button primary" onClick={handleClick}>{cta}</button>
            <p>{fallBackText}<NavLink to={ctaFallBackLink}>{ctaFallBack}</NavLink></p>
        </form>
    )
}

export default Form