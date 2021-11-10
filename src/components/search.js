import React, {useState} from 'react'

function Search(){

    const [query, setQuery] = useState("")

    function handleChange(event){
        event.preventDefault()
        setQuery(()=>{
            return event.target.value
        })
    }

    return(
        <form className="search">
            <div>
                <input className="search-input" type="text" value={query} placeholder="Search track" onChange={handleChange}/>
                <button className="search-button">Search</button>
            </div>
        </form>
    )
}
export default Search