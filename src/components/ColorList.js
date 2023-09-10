import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "white",
    "brown",
    "yellow",
    "orange",
    "green",
  ];
  const colorElement = colors.map((color) => {
    return <ColorItem key={color} color={color} />
  })
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElement}
      </ol>
    </div>
  );
}

export default ColorList;
