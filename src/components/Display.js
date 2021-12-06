import React from "react";

const Display = (props) => {
   const { value } = props;
   return (
      <div id="display" className="flex">
         <input type="text" tabIndex="-1" value={value} />
      </div>
   )
}

export default Display;