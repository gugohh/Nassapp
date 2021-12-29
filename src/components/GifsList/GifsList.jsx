import React from "react";
import { useEffect, useState } from 'react';

import getGifs from '../../services/getGifs'
import Gif from '../Gif/Gif';

const GifsList = ({ params }) => {

  const {keyword} = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGif] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => setGif(gifs));
      setLoading(false)
  }, [keyword])

  if (loading) return <i>Cargando...</i>

  return <div>
  {
    gifs.map(({id, title, url}) =>

    <Gif
      key={id}
      title={title}
      url={url}
      id={id}

    />)
  }
    </div>
};

export default GifsList;
