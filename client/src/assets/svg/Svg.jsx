import React from "react";
import Icons from "./icons.svg";

const Svg = ({ name, fill, stroke, width, height, className }) => {
  return (
    <svg
      // className={`icon icon-${name}`}
      className={className}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default Svg;
