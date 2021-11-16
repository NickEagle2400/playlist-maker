import React, {useState, useEffect} from 'react'
import Container from '../containers/container'
import TableContainer from '../containers/tablecontainer'
import MusicFridayInfo from '../components/musicfridayinfo'
import axios from 'axios'
import {TableHeaderData} from '../data/tableheaderdata'

function NewMusicFriday(){

    const isMyPlaylist = false

    const [trackList, setTrackList] = useState(null)

    const options = {
        method: 'GET',
        url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/playlist',
        params: {id: '37i9dQZF1DX4JAvHpjipBk', start: '0', limit: '50'},
        headers: {
            'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
            'x-rapidapi-key': '67aefb3063msh35a7770f0872344p165a5bjsn1ccb5dda6006'
        }
    }

    async function getNewMusicFriday(){

        const response = await axios(options)

            const templateData = {
                "playlist": [],
                "totalLength": 0
            }

            response.data.Results.map((item, index) => {
                templateData.playlist.push({
                    "Id": item.track.id,
                    "title": item.track.name,
                    "author": item.track.artists[0].name,
                    "album": item.track.album.name,
                    "imageUrl": item.track.album.images[0].url,
                    "length": item.track.duration_ms,
                    "popularity": item.track.popularity,
                    "date": item.track.album.release_date,
                    "mpegUrl":item.track.preview_url,
                    "spotifyUrl": item.track.external_urls.spotify,
                })
                templateData.totalLength += item.track.duration_ms
            })

            return templateData
    }

    useEffect(() => {

        const getTracks = async () => {
            await getNewMusicFriday()
            .then( tracks =>{ 
                setTrackList(tracks)
            })
        }

        getTracks()

    }, [])


    if(trackList){
        return(
            <Container>
                <div className="music-friday">
                    <div className="card-container">
                        <MusicFridayInfo
                            totalTracks={trackList.playlist.length} 
                            totalLength={trackList.totalLength}
                        />
                        <TableContainer 
                            tableData={trackList}
                            tableHeader={TableHeaderData.header}
                            isMyPlaylist={isMyPlaylist}
                        />
                        
                    </div>
                </div>
            </Container>
        )
    }else{
        return(
            <Container>
                Loading
            </Container>
        )
    }
    
    
}
export default NewMusicFriday