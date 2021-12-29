import React from "react";
import Gif from '../Gif/Gif';

const GifsList = ({ gifs }) => {
  return  gifs.map(({id, title, url}) =>

      <Gif
        key={id}
        title={title}
        url={url}
        id={id}

      />)
};

export default GifsList;
