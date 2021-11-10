import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

function SpotifyLink({href}){
    return <a href={href} className="spotify" rel="noreferrer" target="_blank" title="Spotify Link"><FontAwesomeIcon icon={faSpotify} size="lg" /></a>
}

export default SpotifyLink