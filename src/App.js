import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './compnents/Home/Home';
import Inventory from './compnents/Inventory/Inventory';
import Blogs from './compnents/Blogs/Blogs';
import ContactUs from './compnents/ContactUs/ContactUs';
import NotFound from './compnents/NotFound/NotFound';
import Footer from './compnents/Footer/Footer';
import Login from './compnents/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='inventory' element={<Inventory></Inventory>}></Route>
      <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
