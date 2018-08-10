import React from "react";

import "./Marker.css";

const marker = props => (
  <svg
    width="75"
    height="50"
    className="Marker"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="m1.54286,1.55059l72.24763,-0.09344l-0.38584,37.53165l-25.87178,-0.00466l-9.84999,8.85397l-9.9747,-8.84931l-26.06886,-0.1962l-0.09646,-37.24201l0,0z"
        fill="#ffffff"
        stroke="#dbdbdb"
        strokeWidth="1"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="black"
        fontSize="22"
        dy="0.1em"
        fontWeight="500"
      >
        ${props.price}
      </text>
    </g>
  </svg>
);

export default marker;
