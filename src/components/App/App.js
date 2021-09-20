import React, { useEffect, useState } from 'react';
import { fetchLatestPhotos } from '../../apiCalls';
import './App.css';
import Cards from '../Cards/Cards';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [likedPhotos, setLiked] = useState([]);
  const [showingLiked, setShownCards] = useState(false);
  // const [error, setError] = useState('');

  useEffect(() => {
    fetchLatestPhotos().then((data) => setPhotos(data.latest_photos));
  }, []);

  const likePhoto = (card) => {
    setLiked([card, ...likedPhotos]);
  };

  const displayLikedPhotos = () => {
    setShownCards(true);
  };

  const displayAllPhotos = () => {
    setShownCards(false);
  };

  const unlikePhoto = () => {};

  return (
    <div className="App">
      <header className="header">
        <h1>SPACESTAGRAM</h1>
        <button onClick={displayLikedPhotos}>my favorites</button>
        <button onClick={displayAllPhotos}>all images</button>
      </header>
      <Cards
        data={!showingLiked ? photos : likedPhotos}
        likePhoto={likePhoto}
        unlikePhoto={unlikePhoto}
      />
    </div>
  );
};

export default App;
