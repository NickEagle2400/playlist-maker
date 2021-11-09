import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function PlayButton({audio, ...props}){

    const [isPlaying, setPlaying] = useState(true)
    
    function togglePlay(event){
        if(isPlaying){
            event.currentTarget.querySelector('audio').play()
        }
        else{
            event.currentTarget.querySelector('audio').pause()
        }
        setPlaying(prevState => {return !prevState})
    }

    function handleEnded(event){
        event.preventDefault()
        setPlaying(prevState => {return !isPlaying})
    }

    return(
        <button onClick={togglePlay}>
            <audio src={audio} {...props} onEnded={handleEnded}/>
            {!isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </button>
    )
    
}

export default PlayButton