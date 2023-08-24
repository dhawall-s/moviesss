import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage';
import Login from './Components/LoginPage';
import DrawerAppBar from './Components/common/Header';
import Color from './Components/common/Footer';
import ContactUs from './Components/Conctact';
import About from './Components/About';

function App() {
  return (
    
    <BrowserRouter>
    <DrawerAppBar/>
    <Routes>
     <Route path='/'exact element={<Home/>}/>
     <Route path='/login'exact element={<Login/>}/>
     <Route path='/contactus'exact element={<ContactUs/>}/>
     <Route path='/about'exact element={<About/>}/>
    </Routes>
    <Color/>
    </BrowserRouter>
  );
}

export default App;
