import React, { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import Search from "../search/SearchLoc";
import "./location.css";
import axios from "axios";
const Location = () => {
  const [locationData, setLocationData] = useState("");
  const [page,setPage]=useState(1);
  const url = `https://rickandmortyapi.com/api/location?page=${page}`;

  const searchLoc = (val) => {
    setLocationData(val);
  };

    //next page
    const getNextPage = () => {
        if (page == 7) {
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
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setLocationData(response.data.results);
      setPage(page);
    };
    fetch();
  }, [url,page]);
  return (
    <>
      <div className="location">
        <Search data={searchLoc} title={"location"}/>
        <h2>Character Location</h2>
        <div className="left-loc"></div>
        <div className="right-loc">
          <table>
            <thead>
              <tr>
                <th className="th">S no.</th>
                <th className="th">Name</th>
                <th className="th">Type</th>
                <th className="th">Dimension</th>
              </tr>
            </thead>
            <tbody>
              {locationData.length !== 0
                ? locationData.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="td">{index + 1}</td>
                          <td className="td">{data.name}</td>

                          <td className="td">{data.type} mint </td>
                          <td className="td">{data.dimension} </td>
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
          title={"loc"}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
        />
      </div>
    </>
  );
};

export default Location;
