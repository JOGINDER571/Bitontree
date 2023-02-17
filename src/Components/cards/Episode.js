import React, { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import Search from "../search/SearchEpi";
import "./episode.css";
import axios from "axios";
const Episode = () => {
  const [episodeData, setEpisodeData] = useState("");

  const [page, setPage] = useState(1);
  const url = `https://rickandmortyapi.com/api/episode?page=${page}`;

  //next page
  const getNextPage = () => {
    if (page == 3) {
      setPage(1);
      return;
    }
    setPage(page + 1);
    console.log("pageloc", page);
  };
  //previous page
  const getPrevPage = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };
  //searching
  const searchEpi = (val) => {
    setEpisodeData(val);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url);
      console.log("episode", response.data);
      setEpisodeData(response.data.results);
      setPage(page);
    };
    fetch();
  }, [url, page]);
  return (
    <>
      <div className="episode">
        <Search data={searchEpi} title={"episode"}/>
        <h2>Character Episode</h2>
        <div className="left-epi"></div>
        <div className="right-epi">
          <table>
            <thead>
              <tr>
                <th className="th">S no.</th>
                <th className="th">Name</th>
                <th className="th">air_date</th>
                <th className="th">episode</th>
              </tr>
            </thead>
            <tbody>
              {episodeData.length !== 0
                ? episodeData.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="td">{index + 1}</td>
                          <td className="td">{data.name}</td>

                          <td className="td">{data.air_date} mint </td>
                          <td className="td">{data.episode} </td>
                        </tr>
                      </React.Fragment>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <Pagination
          page={page}
          title={"epi"}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
        />
      </div>
    </>
  );
};

export default Episode;
