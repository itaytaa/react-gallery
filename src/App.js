import React, { useEffect, useState } from 'react';
import './App.css';
import { FaAngleDoubleDown } from "react-icons/fa";




function App() {

  const [value, setValue] = useState('');
  const [albums, setalbums] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(res => (setalbums(res)))
  }, []);

  function handleChange(e) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.value}`)
      .then(res => res.json())
      .then(res => setSelectedAlbum(res))
      .then(setValue(e.target.value))
  }




  return (

    <div className="App">

      <h1>Select an album:</h1>
     
      <select value={value} onChange={handleChange} >
        <option>please select... </option>
       
        {albums.map((album) => {
          return <option key={album.id} value={album.id}>{album.title} </option>
        })}
      </select>
      
      <FaAngleDoubleDown className="arrow"/>
      <div className="imgContainer">{selectedAlbum.map((pic, index) => {
        return <img src={pic.url} alt="" key={index} />
      })}</div>

    </div >
  )
}


export default App;






