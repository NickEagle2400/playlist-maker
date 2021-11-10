import React from 'react'
import Container from '../containers/container'
import TableContainer from '../containers/tablecontainer'
import MusicFridayInfo from '../components/musicfridayinfo'
import {TableHeaderData} from '../data/tableheaderdata'
import {Test} from '../data/test'

function NewMusicFriday(){

    const isMyPlaylist = false

    return(
        <Container>
            <div className="music-friday">
                <div className="card-container">
                    <MusicFridayInfo
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
export default NewMusicFriday