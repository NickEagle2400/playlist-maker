import React from 'react'

function Thumbnail({src, alt, ...props}){
    return(
        <img src={src} alt={alt} {...props} />
    )
}

export default Thumbnail