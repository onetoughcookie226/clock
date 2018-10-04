import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock'
// import Hour from './components/Hour'
// import Minute from './components/Minute'
// import Second from './components/Second'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" >*/}
          <h1 className="App-title">My Cool Clock</h1>
        </header>
        <p className="App-intro"></p>
        <Clock />
      </div>
    );
  }
}

export default App;
