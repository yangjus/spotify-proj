import './App.css';
import Error from './Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './home_components/Home.js';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login'

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
