import React from 'react';
import "./SearchStyle.css";

const Search = () => {

    return (
        <div className="searchContainer">
            <span className="searchIcon" ><i className="fa fa-search"></i></span>
            <input type="text" placeholder="Titles, People, genres" className="searchInp" />
        </div>
    )
}

export default Search;