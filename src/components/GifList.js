import React, { useState, useEffect } from "react";
import GifItem from "./GifItem";
import getGifs from "../helpers/getGifs"

const GifList = ({ category }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImage) 
  }, [category]);


  return (
    <>
      <h3>{category}</h3>

      <div className="cardGrid">
        {image.map((img) => (
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
