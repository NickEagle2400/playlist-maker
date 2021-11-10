import React from 'react'
import Container from '../containers/container'
import TableContainer from '../containers/tablecontainer'
import DiscoveryInfo from '../components/discoveryinfo'
import {TableHeaderData} from '../data/tableheaderdata'
import {Test} from '../data/test'


function Discovery(){

    const isMyPlaylist = false

    return(
        <Container>
            <div className="my-playlist">
                <div className="card-container">
                    
                    <DiscoveryInfo 
                        totalTracks={Test.data.playlist.length}
                    />
                    <TableContainer 
                        tableData={Test}
                        tableHeader={TableHeaderData.header}
                        isMyPlaylist={isMyPlaylist}
                    />
                </div>
            </div>
        </Container>
    )
}
export default Discovery