import React, { useEffect, useState } from 'react'

export const QueryContext = React.createContext({query: "", update: () => {} })

export function QueryProvider({children}){

    const [query, setQuery] = useState("")

    const update = (search) =>{
        setQuery(() => {
            return search
        })
    }

    return (
        <QueryContext.Provider
            value={{
                query
            }}
        >
            {children}
        </QueryContext.Provider>
    )
}