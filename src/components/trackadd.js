import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

function TrackAdd({track}){
    const trackId = {track}
    return(
        <span className="track-add" title="Add track to your playlist">
            <FontAwesomeIcon icon={faPlusSquare} size="lg"/>
        </span>
    )
}

export default TrackAdd