import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="btn">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/location")}>Location</button>
        <button onClick={() => navigate("/episode")}>Episode</button>
      </div>
    </div>
  );
}

export default Navbar;
