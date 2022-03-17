import React, { useState, useEffect } from "react";
import useFetchGifs from "../hooks/useFetchGifs";

import GifItem from "./GifItem";
// import getGifs from "../helpers/getGifs";

const GifList = ({ category }) => {
  // const [image, setImage] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImage);
  // }, [category]);

  return (
    <>
      <h3 className="canimate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="canimate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem
            key={img.id}
            // img={img}
            {...img}
          />
        ))}
      </div>
    </>
  );
};

export default GifList;
