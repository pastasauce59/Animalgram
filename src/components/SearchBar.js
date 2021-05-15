import React from 'react'

const SearchBar = (props) => {
    return(
        <div>
        <p>Looking For Other Animals?</p>
        <input onChange={ (e) => props.searchPosts(e.target.value)}
         type='text' name='searchBar' placeholder='Search For Any Here...' ></input>
        </div>
    )
}

export default SearchBar