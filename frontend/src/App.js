import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/login/Login.js'

document.title = "Musely - Music You Love";

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
