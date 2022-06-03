import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import User from './components/users/User.js';
import Users from './components/users/Users.js';
import UserList from './components/users/UserList.js';
import Authorize from './components/authorization'
import Background from './components/authorization/Background'
import Forum from './components/forum/Forum.js';
import LikedSongs from './components/song_data/LikedSongs.js';

document.title = "Musely - Music You Love";
document.body.style = 'background: #E6FFFF;';
const code = new URLSearchParams(window.location.seach).get('code');

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Background />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/users" element={<Users />}>
        <Route path="" element={<UserList />} />
        <Route path=":userID" element={<User />}/>
      </Route>
      <Route path="/liked" element={<LikedSongs />}/>
      <Route path="/forum/*" element={<Forum />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
