import './App.css';
import { fetchLatestPhotos } from '../../apiCalls';
import React, { useState } from "react";


const App() {
  const[photos, setPhotos] = useState([])

  const setCards = () => {
    fetchLatestPhotos().then((data) => setPhotos)
  }


  return (
    <div className="App">
      <header className="header">
        <h1>SPACESTAGRAM</h1>
      </header>
      <Cards/>
    </div>
  );
}

export default App;
