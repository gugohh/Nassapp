import React, { useState, useEffect } from "react";
import GifItem from "./GifItem";

const GifList = ({ category }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=8uRbFbAAqxrHC7GkNZ40NkoidcCCjD9r&q=Scorpion1&limit=10&offset=0&rating=g&lang=en";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImage(gifs);
  };
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
