import React from "react";
import "./pagination.css";
const PaginationChar=({page,title,getPrevPage,getNextPage})=>{
  let total=0;
  if(title=="char"){
    total=42;
  }else if(title=="loc"){
    total=7;
  }else{
    total=3;
  }
  console.log("pagi",title)
    return(
        <>
        <div className="pagination">
          <button onClick={()=>getPrevPage()}>Prev</button>
          <p>{page}{" "}out of {total}</p>
          <button onClick={()=>getNextPage()}>next</button>
        </div>
        </>
    )
}
export default PaginationChar;


