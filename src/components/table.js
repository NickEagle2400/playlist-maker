import React from 'react'
import TableRow from './tablerow'


function Table({ list, isMyPlaylist}){
    console.log(list)
    return(
        <table>
            <tbody>
                {list.data.playlist.map((item, index)=>{
                    return(
                        <TableRow
                            key={index}
                            trackID={item.Id}
                            index={index}
                            imgsrc={item.imageUrl} 
                            title={item.title} 
                            author={item.author}
                            album={item.album}
                            length={item.length}
                            popularity={item.popularity} 
                            date={item.date}
                            audsrc={item.mpegUrl}
                            spotifyLink={item.spotifyUrl}
                            isInMyPlaylist={isMyPlaylist}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table