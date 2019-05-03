import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './containers/Home/Home'
import Announcements from './containers/Announcements/Announcements'
import Give from './containers/Give/Give'
import Understand from './containers/UnderstandingStates/UnderstandingStates'
import Nani from './containers/StateDemo/StateDemo'

class App extends Component {
    
  render() {   
    
    let appData = {
      count: 17,
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
    }

    return (
      /*<div>
        <Route path = '/home' exact component = {Home}/>
        <Route path = '/announcements' component = {Announcements}/>
        <Route path = '/give' exact component = {Give}/>
        <Route path = '/' exact component = {Understand}/>
      </div>*/
      <div>        
        <Nani data1={appData}></Nani>
      </div>      
    );
  }
}

export default App;
 