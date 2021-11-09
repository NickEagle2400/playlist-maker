import React from 'react'
import {NavLink} from 'react-router-dom'

function Form({cta, ctaFallBack, ctaFallBackLink, fallBackText, handleSubmit }){
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input type="email" placeholder="Email" />
            </label>
            <label>
                <input type="password" placeholder="Password" />
            </label>
            <button type="submit" className="button primary">{cta}</button>
            <p>{fallBackText}<NavLink to={ctaFallBackLink}>{ctaFallBack}</NavLink></p>
        </form>
    )
}

export default Form