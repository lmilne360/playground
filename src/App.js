import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Searchbar from './Components/Searchbar';
import Searchbar2 from './Components/Searchbar2';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Book Collection</h1>
        </header>
        <div className="App-intro">
          <Searchbar2></Searchbar2>
        </div>
      </div>
    );
  }
}

export default App;
