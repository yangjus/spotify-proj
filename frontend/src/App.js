import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js'
import SongListing from "./components/home/song_and_artists_components/songListing"
import ArtistListing from "./components/home/song_and_artists_components/artistListing"
import User from './components/users/User.js';
import Users from './components/users/Users.js';

document.title = "Musely - Music You Love";
document.body.style = 'background: #E6FFFF;';
const code = new URLSearchParams(window.location.seach).get('code');

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/users" element={<Users />}>
        <Route path=":userID" element={<User />}/>
      </Route>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
