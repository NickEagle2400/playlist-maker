import React from 'react'
import PlayButton from '../components/playbutton'
import TrackTitle from '../components/tracktitle'
import TrackDelete from '../components/trackdelete'
import TrackAdd from '../components/trackadd'
import SpotifyLink from '../components/spotifylink'

function TableRow({ trackID, index, imgsrc, title, author, album, length, popularity, date, audsrc, spotifyLink, isInMyPlaylist }){
    
    let min = Math.floor((length/1000/60) << 0)
    let sec = Math.floor((length/1000) % 60)
    
    return(
        <tr>
            <td>{++index}</td>
            <td>
                <TrackTitle 
                    src={imgsrc}
                    title={title}
                    author={author}
                />
            </td>
            <td>{album}</td>
            <td>{min}:{sec}</td>
            <td>{popularity}</td>
            <td>{date}</td>
            <td>
                <PlayButton 
                    src={audsrc} 
                    type="audio/mpeg"/>
            </td>
            <td><SpotifyLink href={spotifyLink}/></td>
            <td>
                {isInMyPlaylist ? <TrackDelete track={trackID} /> : <TrackAdd track={trackID} />}
            </td>
        </tr>
    )
}

export default TableRow