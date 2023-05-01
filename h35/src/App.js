import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import Visual from './components/Visual';
import Error from './components/Error';

function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/visual" element={<Visual />} />
      <Route path="*" element={<Error />} />
    </Routes>
   </>
  );
}

export default App;
