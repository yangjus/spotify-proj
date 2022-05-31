import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/login/Login.js'
import SongListing from "./components/home/song_and_artists_components/songListing"
import ArtistListing from "./components/home/song_and_artists_components/artistListing"
import Top_Artists from "./components/home/Top_Artists";
document.title = "Musely - Music You Love";

function App() {
  return (
    <div className="App">
      {/*<Routes>*/}
      {/*  <Route path="/" element={<Login />}/>*/}
      {/*  <Route path="/home" element={<Home />}/>*/}
      {/*  <Route path="*" element={<Error />}/>*/}
      {/*</Routes>*/}
        <Top_Artists/>

    </div>
  );
}

export default App;
