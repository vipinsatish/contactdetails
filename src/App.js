import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <Switch>
      <Route path="/" component={Contact}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/About" component={About}/>
       
      </Switch>
    </div>
    </BrowserRouter>
  );
}
const Home=()=>{
  return(
      <div className="Contactstyle">
          <h2> Welcome to Home page. </h2>

      </div>
  )
}
export default App;
