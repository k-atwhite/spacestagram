import './App.css';
import { fetchLatestPhotos } from '../apiCalls';

function App() {
  fetchLatestPhotos();

  return (
    <div className="App">
      <header lassName="Martiagram">
        <p>Here is your mars photo</p>
      </header>
    </div>
  );
}

export default App;
