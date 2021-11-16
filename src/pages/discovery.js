import React, {useState, useEffect, useContext} from 'react'
import Container from '../containers/container'
import TableContainer from '../containers/tablecontainer'
import DiscoveryInfo from '../components/discoveryinfo'
import axios from 'axios'
import { QueryProvider } from '../context/query'
import {QueryContext} from '../context/query'
import {TableHeaderData} from '../data/tableheaderdata'
import {Test} from '../data/test'


function Discovery(){

    const isMyPlaylist = false

    const [trackList, setTrackList] = useState(null)
    const {query} = useContext(QueryContext)

    async function getResults(){
        let options = {
            method: 'GET',
            url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/search',
            params: {query: query, count: '20', type: 'tracks'},
            headers: {
                'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
                'x-rapidapi-key': '67aefb3063msh35a7770f0872344p165a5bjsn1ccb5dda6006'
            }
        }

        const response = await axios(options)

        const templateData = {
            "playlist": [],
            "totalLength": 0
        }

        response.data.Results.map((item, index) => {
            templateData.playlist.push({
                "Id": item.id,
                "title": item.name,
                "author": item.artists[0].name,
                "album": item.album.name,
                "imageUrl": item.album.images[0].url,
                "length": item.duration_ms,
                "popularity": item.popularity,
                "date": item.album.release_date,
                "mpegUrl":item.preview_url,
                "spotifyUrl": item.external_urls.spotify,
            })
            templateData.totalLength += item.duration_ms
        })

        return templateData
    }

    useEffect(() => {
        if(query !== ""){

            const getTracks = async () => {
                await getResults()
                .then( tracks =>{ 
                    setTrackList(tracks)
                })
            }

            getTracks()
        }

    }, [query])

    if(trackList){
        return(
            <QueryProvider>
                <Container>
                    <div className="my-playlist">
                        <div className="card-container">
                            
                            <DiscoveryInfo 
                                totalTracks={trackList.playlist.length}
                            />
                            <TableContainer 
                                tableData={trackList}
                                tableHeader={TableHeaderData.header}
                                isMyPlaylist={isMyPlaylist}
                            />
                        </div>
                    </div>
                </Container>
            </QueryProvider>
        )
    }else{
        return(
            <QueryProvider>
                <Container>
                    <div className="my-playlist">
                        <div className="card-container">
                            
                            <DiscoveryInfo 
                                totalTracks=""
                            />
                        </div>
                    </div>
                </Container>
            </QueryProvider>
        )
    }
}
export default Discovery