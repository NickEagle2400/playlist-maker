import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

function TrackDelete({track}){
    const trackId = {track}
    return(
        <span className="track-delete" title="Delete track">
            <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
        </span>
    )
}

export default TrackDelete