import React from "react";
function Keeper() {
  return (
    <div className="keeper">
      {/* <h1>Title</h1> */}
      {/* <input type="text" className="keeper" id="inputcontent"/> */}
      <textarea rows="2" cols="2" name="description"
       id="inputcontent" placeholder="Note title">
      </textarea>
    </div>
  );
}

export default Keeper();
