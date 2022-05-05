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
import RequireAuth from './compnents/RequireAuth/RequireAuth';
import Register from './compnents/Register/Register';
import TotalItem from './compnents/TotalItem/TotalItem';
import SingleItem from './compnents/SingleItem/SingleItem';
import ManageItem from './compnents/ManageItem/ManageItem';
import AddItem from './compnents/AddItem/AddItem';
import Manage from './compnents/Manage/Manage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='singleitem' element={<SingleItem></SingleItem>}></Route>
    
      <Route path='totalitem' element={
        <RequireAuth>
            <TotalItem></TotalItem>
        </RequireAuth>
      }></Route>
      <Route path='inventory/:inventoryId' element={
        <RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
      }></Route>
      <Route path='manageitem' element ={
        <RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>
      }
      ></Route>
      <Route path='additem' element={
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
      }></Route>
      <Route path='manage' element={<Manage></Manage>}></Route>
      <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
