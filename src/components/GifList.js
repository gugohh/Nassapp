import React, { useState, useEffect } from "react";
import useFetchGifs from "../hooks/useFetchGifs";

// import GifItem from "./GifItem";
// import getGifs from "../helpers/getGifs";

const GifList = ({ category }) => {
  // const [image, setImage] = useState([]);

  const {data, loading} = useFetchGifs();
  console.log(loading);
  console.log(data);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImage);
  // }, [category]);
  
  return (
    <>
      <h3>{category}</h3>
      {loading ?  'Cargando...' : 'Data Cargada'}
      
     {/*<div className="cardGrid">
        {image.map((img) => (
          <GifItem
            key={img.id}
            // img={img}
            {...img}
          />
        ))}
      </div>
        */}    
    </>
  );
};

export default GifList;
