import React from 'react'
import Thumbnail from './thumbnail'

function TrackTitle({src, title, author}){
    return(
        <div className="table-title-container">
            <div className="table-img">
                <Thumbnail src={src} alt={title} className="track-img"/>
            </div>
            <div className="table-title">
                <p>{title}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default TrackTitle