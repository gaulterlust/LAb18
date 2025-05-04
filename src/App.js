import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/my-city" element={<MyCity />} />
        <Route path="/my-future" element={<MyFuture />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
