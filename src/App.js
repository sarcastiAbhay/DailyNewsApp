import React from 'react'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News country="in" category="general" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/business" element={<News key="business" country="in" category="business" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/health" element={<News key="health" country="in" category="health" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/science" element={<News key="science" country="in" category="science" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/sports" element={<News key="sports" country="in" category="sports" pageSize="6" apiKey={apiKey} />}></Route>
          <Route path="/technology" element={<News key="technology" country="in" category="technology" pageSize="6" apiKey={apiKey} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App