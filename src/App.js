// import logo from './logo.svg';
import './App.css';



import React, { Component } from 'react';
import Navbar, { submitfunc } from './components/Navbar';
// import News2 from './components/News2';
import News from './components/News';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  console.log(submitfunc())
  
export default class App extends Component {
  render() {
    return <div>
     
      <Router>
      <Navbar/>
      {/* <News/> */}
      {/* <News key="/" query={submitfunc()} max={12} country="in" category="health"/> */}
      

      <Routes>
      <Route path= '/' element={<News key="Breaking-news" max={12} country="in" category="breaking-news"/>}></Route>
        <Route path="/world" element={<News key="World" max={12} country="in" category="world"/>}></Route>
        <Route path="/nation" element={<News key="Nation" max={12} country="in" category="nation"/>}></Route>
        <Route path="/business" element={<News key="Business" max={12} country="in" category="business"/>}></Route>
        <Route path="/entertainment" element={<News key="Entertainment" max={12} country="in" category="entertainment"/>}></Route>
        <Route path="/health" element={<News key="Health" max={12} country="in" category="health"/>}></Route>
        <Route path="/science" element={<News key="Science" max={12} country="in" category="science"/>}></Route>
        <Route path="/sports" element={<News key="Sports" max={12} country="in" category="sports"/>}></Route>
        <Route path="/technology" element={<News key="Technology" max={12} country="in" category="technology"/>}></Route>
        <Route path='' element={<News key="technology" max={12} country="in" category="technology"/>}></Route>
      </Routes>
      </Router> 
    </div>;
  }
}

