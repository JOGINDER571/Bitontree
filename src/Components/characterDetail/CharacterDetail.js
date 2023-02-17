import React, { useEffect, useState } from "react";
import "../characterDetail/characterDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const CharacterDetail = () => {
  const [detail, setDetail] = useState();
  const params = useParams();
  console.log("param", params.id);
  const url=`https://rickandmortyapi.com/api/character/${params.id}`;
  useEffect((id) => {
    const fetch = async () => {
      const response = await axios.get(
        url
      );
      console.log(response.data);
      setDetail(response.data);
    };
    fetch();
  },[url]);
  return (
    <>
      <div className="character">
        {!detail ? (
          <p>Details are not found</p>
        ) : (
          <div className="character-detail">
            <div className="left-div">
              <img src={detail.image} alt="no image" />
            </div>
            <div className="right-div">
              <h3>Details of the Character</h3>
              <div>
                <p>name: {detail.name}</p>
                <p>Status:{detail.status}</p>
                <p>Species:{detail.species}</p>
                {/* <p>type</p> */}
                <p>Origin:{detail.origin.name}</p>
                <p>Episode:{detail.episode.length}</p>
                <p>location:{detail.location.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CharacterDetail;
