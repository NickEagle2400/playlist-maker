import React from 'react'

function MyPlaylistInfo({totalTracks, totalLength}){

    let hours = Math.floor((totalLength/1000/60/60) << 0)
    let min = Math.floor((totalLength/1000/60) % 60)

    return(
        <div className="my-playlist-info">
            <h1>My Playlist</h1>
            <span>User: <strong>NickEagle2400</strong></span>
            <span>Tracks: <strong>{totalTracks}</strong></span>
            <span>Length: <strong>{hours}h {min}m</strong></span>
        </div>
    )
}

export default MyPlaylistInfo