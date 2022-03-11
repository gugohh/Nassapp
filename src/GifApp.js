import React,{useState} from "react";
import AddGifCat from "./components/AddGifCat";

const GifApp = () => {
  const [categories, setCategory] = useState(["Scorpion", "Sub-Zero", "Shinnok", "Baraka"])
  // const categories = ["Scorpion", "Sub-Zero", "Shinnok", "Baraka"];

  // const handleAdd = () => {
  // setCategory([...categories, 'Hulk'])
  // // setCategory(gifcat => [...gifcat, "Hulk"])
  // }
  
  return (
    <div>
      <h2>GIPPY</h2>
      <AddGifCat/>
      <hr />
      
      <ol>
        { 
          categories.map((category) => {
          return <li key={category}>{category}</li>;
          })
        }
      </ol>
    </div>
  );
};

export default GifApp;
