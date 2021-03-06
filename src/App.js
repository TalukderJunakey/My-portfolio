
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import Experience from './Pages/Home/Experience';
import Experiences from './Pages/Home/Experiences';
import Projects from './Pages/Home/Projects';
import Resume from './Pages/Resume';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path='/experience' element={<Experiences></Experiences>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
  );
}

export default App;
