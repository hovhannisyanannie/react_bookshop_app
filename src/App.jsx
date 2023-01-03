
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Authors from './pages/authors/Authors';
import NotFound from './pages/NotFound/NotFound';
import { useState } from 'react';

const App = () => {
  const [order, setOrder] = useState([]);
  const [Show, setShow] = useState(false);

  const handleShow = ()=>{
  setShow(!Show);
}


  return (
    <Router>
      <Header  order={order} handleShow={handleShow}/>
      <Routes>
          <Route path="/" element={ <Home order={order} setOrder={setOrder} Show={Show}  handleShow={handleShow}  />} />
          <Route path='/authors' element={<Authors />} />  
          <Route path='/contact' element={<Contact />} />  
          <Route path='/about' element={<About />} />  
          <Route path='*' element={<NotFound />} />  
      </Routes>
      <Footer />
    </Router>
  )
}

export default App