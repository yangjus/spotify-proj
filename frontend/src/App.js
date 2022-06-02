import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
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
    </div>
  );
}

export default App;
