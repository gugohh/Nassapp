import React, { useState } from "react";

const Home = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <div>
      <form action="">
        <input type="text" value={keyword}/>
      </form>

    </div>);
};

export default Home;
