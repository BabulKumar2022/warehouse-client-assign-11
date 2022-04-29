import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './compnents/Home/Home';
import Inventory from './compnents/Inventory/Inventory';
import Blogs from './compnents/Blogs/Blogs';
import AboutMe from './compnents/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='inventory' element={<Inventory></Inventory>}></Route>
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='aboutme' element={<AboutMe></AboutMe>}></Route>
    </Routes>
    </div>
  );
}

export default App;
