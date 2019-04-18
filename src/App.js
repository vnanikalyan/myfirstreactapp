import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './containers/Home/Home'
import Announcements from './containers/Announcements/Announcements'
import Give from './containers/Give/Give'

class App extends Component {
  
  render() {   
    return (
      <div>
        <Route path = '/home' exact component = {Home}/>
        <Route path = '/announcements' component = {Announcements}/>
        <Route path = '/give' exact component = {Give}/>
      </div>      
    );
  }
}

export default App;
 