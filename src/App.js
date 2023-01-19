import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from './components/Skills/Skills'
import Certificates from './components/Certificates/Certificates'
import Loader from "./components/Loader/Loader";


function App() {

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    },  500)
  }, []);

  return (
    <div className='app'>
      {loaded ? <Loader /> : null}
      <Header />   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Certificates" element={<Certificates />} />
      </Routes>   
    </div>
  );
}

export default App;
