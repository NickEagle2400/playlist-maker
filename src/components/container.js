import React from 'react'

function Container({children, ...props}){
    return(
        <div className="page-container" {...props}>
            {children}
        </div>
    )
}
export default Container