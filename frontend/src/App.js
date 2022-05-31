import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';

document.title = "Musely - Music You Love";
const code = new URLSearchParams(window.location.seach).get('code');
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
