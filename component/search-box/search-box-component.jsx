import React from 'react'

function SearchBox({handlechange}) {
    return (
        <div>
         <input type='search' 
        onChange={handlechange}
        />
        </div>
    )
}

export default SearchBox
