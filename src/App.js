import { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs'


function App() {

  const [gifs, setGif] = useState([]) 

  useEffect(() => {

    getGifs().then(gifs => setGif(gifs));
     
  }, [])

  return (
    <div className="App">
      <section>
        {

          gifs.map(singleGif =>{
          return <div>
            <h4>{singleGif.title}</h4>
            <small>{singleGif.id}</small>
            <img alt={singleGif.title} src={singleGif.url} />
            </div>
          }  )

        }
      </section>
    </div>
  )
}

export default App;
