import React from "react";
function Footer(){
  // let copy = [%raw {|'&#169'|}];
  return(
   <div className="footer">Copyright {new Date().getFullYear()}</div>
    
  )
}

export default Footer();