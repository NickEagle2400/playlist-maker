import React, {useState, useContext} from 'react'
import {QueryContext} from '../context/query'

function Search(){

    const {query, update} = useContext(QueryContext)
    const [search, setSearch] = useState("")

    function handleChange(event){
        event.preventDefault()
        setSearch(()=>{
            return event.target.value
        })
    }

    function handleClick(event){
        event.preventDefault()
        console.log(update)
        if(search !== "" || search !== undefined){}
            //setQuery(search)
    }

    return(
        <form className="search">
            <div>
                <input className="search-input" type="text" value={search} placeholder="Search track" onChange={handleChange}/>
                <button className="search-button" onClick={handleClick}>Search</button>
            </div>
        </form>
    )
}
export default Search