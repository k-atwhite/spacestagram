import React, { useEffect, useState } from 'react';
import { fetchLatestPhotos } from '../../apiCalls';
import './App.css';
import Cards from '../Cards/Cards';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [likedPhotos, setLiked] = useState([]);
  const [showingLiked, setShownCards] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLatestPhotos()
      .then((data) => setPhotos(data.latest_photos))
      .catch(() => setError('Something went wrong...'));
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

  const unlikePhoto = (id) => {
    let updatedFavorites = likedPhotos.filter((photo) => photo.id !== id);
    setLiked(updatedFavorites);
  };

  const loadingMsg = !photos.length && !error.length && (
    <h2>Loading your images...</h2>
  );

  return (
    <main className="App">
      <header className="header">
        <h1>SPACESTAGRAM</h1>
        <button className="fav-btn" onClick={displayLikedPhotos}>
          my favorites
        </button>
        <button className="all-btn" onClick={displayAllPhotos}>
          all images
        </button>
      </header>
      {loadingMsg}
      <Cards
        data={!showingLiked ? photos : likedPhotos}
        likePhoto={likePhoto}
        unlikePhoto={unlikePhoto}
      />
    </main>
  );
};

export default App;
