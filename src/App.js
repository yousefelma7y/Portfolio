import React  from  'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar/navbar.js';
import Pages from './components/Pages/pages';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path="/" exact  element={<Pages />} />
       
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
       <Footer/>
     </BrowserRouter>
     
      
    </>
 
  );
}

export default App;
