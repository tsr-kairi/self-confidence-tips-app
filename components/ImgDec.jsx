import React from "react";

export default function ImgDec({ image }) {
  return (
    <div
      className="h-[500px] w-[770px] overflow-hidden"
      style={{
        backgroundImage: `url(/images/${image})`,
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    ></div>
  );
}
