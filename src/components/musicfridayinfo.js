import React from 'react'

function MusicFridayInfo({totalTracks, totalLength}){

    let hours = Math.floor((totalLength/1000/60/60) << 0)
    let min = Math.floor((totalLength/1000/60) % 60)

    return(
        <div className="my-playlist-info">
            <h1>New Music Friday</h1>
            <span>Tracks: <strong>{totalTracks}</strong></span>
            <span>Length: <strong>{hours}h {min}m</strong></span>
        </div>
    )
}

export default MusicFridayInfo