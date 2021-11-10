import React from 'react'
import Search from './search'


function DiscoveryInfo({totalTracks, totalLength}){

    return(
        <div className="discovery-info">
            <h1>Discovery</h1>
            <span>Tracks: <strong>{totalTracks}</strong></span>
            <Search />
        </div>
    )
}

export default DiscoveryInfo