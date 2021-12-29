import React from "react";
import "./Gif.css";

const Gif = ({title, id, url}) => {

  return (

    <div className="gif">
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </div>

  );
};

export default Gif;
