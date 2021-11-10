import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons'

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
        <span onClick={togglePlay} className="player">
            <audio src={audio} {...props} onEnded={handleEnded}/>
            {!isPlaying ? <FontAwesomeIcon icon={faPauseCircle} size="lg"/> : <FontAwesomeIcon icon={faPlayCircle} size="lg" />}
        </span>
    )
    
}

export default PlayButton