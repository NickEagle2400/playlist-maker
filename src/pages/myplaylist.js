import React from 'react'
import Container from '../containers/container'
import TableContainer from '../containers/tablecontainer'
import MyPlaylistInfo from '../components/myplaylistinfo'
import {TableHeaderData} from '../data/tableheaderdata'
import {Test} from '../data/test'

function MyPlaylist(){

    const isMyPlaylist = true

    return(
        <Container>
            <div className="my-playlist">
                <div className="card-container">
                    <MyPlaylistInfo 
                        totalTracks={Test.data.playlist.length}
                        totalLength={Test.data.totalLength}
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
export default MyPlaylist

