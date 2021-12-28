import { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {

  const [gifs, setGif] = useState([]) 

  useEffect(() => {

    getGifs().then(gifs => setGif(gifs));
     
  }, [])

  return (
    <div className="App">
      <section>
        {

          gifs.map(singleGif =><img src={singleGif} />)

        }
      </section>
    </div>
  );
}

export default App;
