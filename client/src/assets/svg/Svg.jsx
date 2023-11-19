import React from "react";
import Icons from "./icons.svg";

const Svg = ({ name, color, width, height }) => {
  return (
    <svg
      className={`icon icon-${name}`}
      fill={color}
      width={width}
      height={height}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default Svg;
