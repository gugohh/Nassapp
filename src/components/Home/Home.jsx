import React, { useState } from "react";
import { Link, useLocation } from "wouter";

import './Home.css'


const popGifs = ["nft-nfts", "money", "gold", "oil"]


const Home = () => {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()


  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/gif/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div className="home">
      <h1> Search Te best Gifs</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <ul>
        {popGifs.map((popGifs) => (
          <li key={popGifs}>

            <Link to={`/gif/${popGifs}`}>GIFs de {popGifs}</Link>

          </li>
        ))}
      </ul>
    </div>);
};

export default Home;
