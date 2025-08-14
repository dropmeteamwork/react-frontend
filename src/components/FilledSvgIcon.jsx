import React from "react";

export default function ({ pathD, iconColor="black" }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={iconColor}
        className="size-6"
      >
        
        <path d={pathD} />
      </svg>
      
    </>
  );
}

