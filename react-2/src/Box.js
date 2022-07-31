import React from "react";
import "./styles.css";

export default function Box(props) {
  // const [online,setOn]=useState(props.on);

  return (
    <div>
      <p
        className="box-clr"
        onClick={(e) => props.toggle(props.id)}
        style={{ backgroundColor: props.on ? "#222222" : "red" }}
      ></p>
    </div>
  );
}
