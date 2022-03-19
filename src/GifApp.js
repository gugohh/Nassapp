import React,{useState} from "react";
import AddGifCat from "./components/AddGifCat";
import GifList from "./components/GifList";

const GifApp = () => {
  const [categories, setCategory] = useState(["Scorpion"])
  // const categories = ["Scorpion", "Sub-Zero", "Shinnok", "Baraka"];

  // const handleAdd = () => {
  // setCategory([...categories, 'Hulk'])
  // // setCategory(gifcat => [...gifcat, "Hulk"])
  // }

  return (
    <div>
      <h2>GIPPY</h2>
      <AddGifCat setCategory={setCategory}/>
      <hr />
      
      <ol>
        { 
          categories.map(category => (
            <GifList 
          key={category}
          category={category}
          /> 
          ))          
        }        
      </ol>
    </div>
  );
};


export default GifApp;
