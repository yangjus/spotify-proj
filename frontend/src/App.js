import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js'
import SongListing from "./components/home/song_and_artists_components/songListing"
import ArtistListing from "./components/home/song_and_artists_components/artistListing"

document.title = "Musely - Music You Love";
document.body.style = 'background: #E6FFFF;';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
