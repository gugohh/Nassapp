import React from "react";

const Gif = ({title, id, url}) => {

  return (

    <div className="gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img alt={title} src={url} />
    </div>

  );
};

export default Gif;
