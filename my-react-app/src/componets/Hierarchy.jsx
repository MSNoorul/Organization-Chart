import React, { useState } from "react";
import TextBackground from "./TextBg";

function HierarchyChart({ data }) {
  const [expands, setExpands] = useState(new Array(data.length).fill(false))

  const handleExpand = (e, index) => {
    e.stopPropagation();
    setExpands((prevExpands) => {
      const newExpands = [...prevExpands];
      newExpands[index] = !newExpands[index];
      return newExpands;
    });
  }


  return (
    <ul>
      {data.map((obj, index) => {

        return (<li key={index} >
          <div className="details">
            <TextBackground name={obj?.name?obj?.name:"#"}/>
            <div className="text-contend">
              <p>{obj?.name}</p>
              <p>{obj?.about}</p> 
            </div>
            <span className="patch">{obj?.about}</span>
            <span className="num" onClick={(e) => { handleExpand(e, index) }}>{expands[index]?'-':obj?.child?obj.child.length:'-'}</span></div>
          {obj?.child && expands[index] && <HierarchyChart data={obj?.child} />}
        </li>)

      })}
    </ul>

  )
}
export default HierarchyChart;