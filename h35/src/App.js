import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import  Home  from './components/Home';
import  HouseChart  from './components/HouseChart';
import  Search  from './components/Search';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/houses' component={HouseChart} />
        <Route exact path='/search' component={Search} />
      </Router>
    </div>
    
  );
}

export default App;
