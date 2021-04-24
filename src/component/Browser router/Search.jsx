import React, { useState } from 'react';
import Searchresult from "./Searchresult";

const Search  = () => {
    const[img ,setImg] = useState("")

    const inputEvent = (event) => {
        const data = event.target.value
        console.log(data);
        setImg(data);

    }
    return (
        <>
            <div className = "searchbar">
                 <input type="text" placeholder = "Search Anything"
                 value={img}
                 onChange={inputEvent} />

            </div>
            { img === "" ? null :<Searchresult name={img} /> }
        </>
    )
}
export default Search;