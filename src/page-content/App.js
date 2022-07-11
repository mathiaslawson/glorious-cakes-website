import React from 'react'
import Heading from "./Heading";
import Into from "./Into";
import Maing from '../gallery-page/Maing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import About from '../about-page/About';
// import "./App.css"


function App() {
  return (
  

<div> 
  <Heading />
 
  <Routes> 
<Route path="/" exact element={ <Into />}></Route>
 <Route path="/gallery" element={<Maing />} />
<Route path="/about" element={ <About />} />
</Routes>

<Footer />
 </div>





 
  );
}

export default App;
