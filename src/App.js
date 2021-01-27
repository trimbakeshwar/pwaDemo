import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Getall from "./component/getall"
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
function App() {
  return (
    <Router>
  <Route exact path="/getall" component={Getall}/> 
  </Router>
  );
}

export default App;