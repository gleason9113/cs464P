import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import Visual from './components/Visual';
import Error from './components/Error';

function App() {
  const [data, setData] = useState([]); // Store the data from the API
  const url = 'https://thronesapi.com/api/v2/Characters'; // API url

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
   <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search data={data} />} />
      <Route path="/visual" element={<Visual data={data}/>} />
      <Route path="*" element={<Error />} />
    </Routes>
   </>
  );
}

export default App;
