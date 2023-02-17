import React, { useState, useEffect } from "react";
import "../search/search.css";
import axios from "axios";
const Search = ({ data,title }) => {

  const [query, setQuery] = useState("");
  console.log(query);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/${title}?name=${query}`
      );
      console.log("fetchepi", response.data.results);
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
            placeholder="Enter the Episode name "
          />
        </div>
      </div>
    </>
  );
};
export default Search;
