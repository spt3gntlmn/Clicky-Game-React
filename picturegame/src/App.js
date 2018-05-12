import React, { Component } from 'react';
import './App.css';
import Images from './Components/images/images';

class App extends Component {
  render() {
    return (
      <div>
        <h1 class='center'>Hello, Please try your hand at our game.
            Try not to select the same picture twice.
        </h1>
        <Images class="test" />
      </div >
    );
  }
}

export default App;
