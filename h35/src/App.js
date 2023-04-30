import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import  Home  from './components/Home';
import  HouseChart  from './components/HouseChart';
import  Search  from './components/Search';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/search' component={Home} />
        <Route path='/houses' component={HouseChart} />
      </Switch>     
    </Router>  
  );
}

export default App;
