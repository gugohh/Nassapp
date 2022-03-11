import React, { useState } from "react";

const AddGifCat = () => {
  const [inputValue, setInputValue] = useState("hi there");

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log('submit done');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        />
      </form>
    </div>
  );
};

export default AddGifCat;
