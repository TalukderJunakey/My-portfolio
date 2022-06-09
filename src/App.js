import logo from './logo.svg';
import './App.css';

import { Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
