import React, { useState } from "react";
import { Link } from "wouter";

const popGifs = ["nft-nfts", "money", "gold", "oil"]


const Home = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <div>
      <h1> Search Te best Gifs</h1>
      <form action="">
        <input type="text" value={keyword} />
      </form>
      <ul>
        {popGifs.map((popGifs)=>(
        <li key={popGifs}>

          <Link to={`/gif/${popGifs}`}>GIFs de {popGifs}</Link>

        </li>
        ))}
      </ul>
    </div>);
};

export default Home;
