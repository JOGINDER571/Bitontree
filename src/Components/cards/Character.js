import React, { useState, useEffect } from "react";
import axios from "axios";
import "./caracter.css";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import { useNavigate } from "react-router-dom";

const Character = () => {
  const [char, setChar] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  //character filter
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  //searching function
  const searchChar = (val) => {
    setChar(val);
  };
  const navigate = useNavigate();

  //next page
  const getNextPage = () => {
    if (page == 42) {
      setPage(1);
      return;
    }
    setPage(page + 1);
    console.log("page", page);
  };
  //previous page
  const getPrevPage = () => {
    if (page == 1) {
      return;
    }
    setPage(page - 1);
  };

  //fetch the api
  const url = `https://rickandmortyapi.com/api/character?page=${page}&gender=${gender}&status=${status}`;

  useEffect(() => {
    const fetchChar = async () => {
      const response = await axios.get(url);
      const result = response.data.results;
      console.log(response.data.info);
      setChar(result);
    };
    fetchChar();
  }, [url, search, status, gender]);

  return (
    <>
      <div className="content">
        <Search data={searchChar} title={"character"} />
        <div className="dropdown">
          <div className="status">
            <label>Choose status:</label>

            <select
              name="status"
              id="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">choose status</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
          <div className="gender">
            <label>Choose Gender:</label>

            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">choose gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="genderless">genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
        </div>
        {!char ? (
          <p>not found</p>
        ) : (
          <div className="cards">
            {char.map((data, index) => {
              return (
                <div
                  onClick={() => navigate(`/characterdetail/${data?.id}`)}
                  className="card"
                  key={index}
                >
                  <div className="img">
                    <img src={data?.image} alt="no" />
                  </div>
                  <div className="character-name">
                    <span>{data?.name}</span>
                  </div>
                  <div className="detail">
                    <p>
                      <span>Location:</span>
                      {data?.location?.name}
                    </p>
                    <p>
                      <span>Episode:</span>
                      {data?.episode?.length}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          page={page}
          title={"char"}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
        />
      </div>
    </>
  );
};

export default Character;
