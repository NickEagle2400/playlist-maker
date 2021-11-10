import React from 'react'

function TableHeader({header}){
    return(
        <div className="my-playlist-head">
            {header.map((item, index) =>{
                return <span key={index}>{item}</span>
            })}
        </div>
    )
}

export default TableHeader