import React, { useState, useEffect } from "react";
import "../search/search.css";
import axios from "axios";
const Search = ({ data,title }) => {

  const [query, setQuery] = useState("");
  // console.log(query);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/${title}?name=${query}&type=${query}&species=${query}`
      );
      console.log("fetch", response.data.results);
      data(response.data.results);
    };
    fetch();
  },[query]);
  return (
    <>
      <div className="search-Character">
        <div className="search">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            id="search"
            autoComplete="none"
            placeholder="Enter the character name,species"
          />
        </div>
      </div>
    </>
  );
};
export default Search;
