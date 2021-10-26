import React from 'react';
import './App.css';
import Body from '../Body/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
      <Body />
    </div>
  );
}

export default App;
