import React  from  'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar/navbar.js';
import Pages from './components/Pages/pages';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import ScrollButton from './components/scrollButton';
import Site from './components/Site/Site.js';


function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes >
          <Route path="/" exact  element={<Pages />} />
          <Route path="/:id" exact  element={<Site/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollButton />
       <Footer/>
     </BrowserRouter>
     
      
    </>
 
  );
}

export default App;
