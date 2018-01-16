import React, { Component } from 'react';
import './App.css';

function Button() {
  return <button className='add-button' type='button'>+</button>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;
