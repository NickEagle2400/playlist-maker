import React from 'react'
import Search from './search'

function SearchBar(){
    return(
        <div className="sidebar">
            <h2>Cerca tra più di 10 milioni di canzoni</h2>
            <Search />
        </div>
    )
}

export default SearchBar