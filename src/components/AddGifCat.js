import React, { useState } from "react";
import PropTypes from "prop-types";


const AddGifCat = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit done");

    if (inputValue.trim().length > 2) {
      setCategory((gifCat) => [...gifCat, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};


AddGifCat.propTypes = {
    setCategory:  PropTypes.func.isRequired
  };

export default AddGifCat;
