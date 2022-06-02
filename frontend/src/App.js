import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
<<<<<<< HEAD
import Authorize from './components/authorization'

document.title = "Musely - Music You Love";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authorize />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
=======
import Login from './components/login/Login.js'
import SongListing from "./components/home/song_and_artists_components/songListing"
import ArtistListing from "./components/home/song_and_artists_components/artistListing"

document.title = "Musely - Music You Love";
document.body.style = 'background: #E6FFFF;';
const code = new URLSearchParams(window.location.seach).get('code');

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
>>>>>>> master
    </div>
  );
}

export default App;
