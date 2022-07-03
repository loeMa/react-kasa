import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Accommodation from './pages/Accommodation';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/accommodation/:id" element={<Accommodation />} ></Route>
        <Route path="*" element={<Error />} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
