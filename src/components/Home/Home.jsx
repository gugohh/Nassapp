import React, { useState } from "react";
import { Link } from "wouter";

import './Home.css'


const popGifs = ["nft-nfts", "money", "gold", "oil"]


const Home = () => {

  const [keyword, setKeyword] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(keyword);
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
