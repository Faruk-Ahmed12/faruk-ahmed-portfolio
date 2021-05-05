import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Blog from './components/Blog/Blog/Blog';
import Contact from './components/Contact/Contact/Contact';
import Works from './components/Works/Works/Works';
import About from './components/About/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/contact">
            <Contact></Contact>
        </Route>
        <Route path="/blog">
            <Blog></Blog>
        </Route>
        <Route path="/work">
            <Works></Works>
        </Route>
        <Route path="/about">
            <About></About>
        </Route>
        <Route Route path = "/appointment" >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
