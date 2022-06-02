import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Authorize from './components/authorization'
import Forum from './components/forum/Forum.js';

document.title = "Musely - Music You Love";
document.body.style = 'background: #E6FFFF;';
const code = new URLSearchParams(window.location.seach).get('code');

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Authorize />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/forum" element={<Forum />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
