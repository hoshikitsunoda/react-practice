import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    input: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    const char = this.state.input.split('').map((letter, index) => {
      return <CharComponent character={letter} key={index} />
    })

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.input} />
        <p>{this.state.input.length}</p>
        <ValidationComponent inputLength={this.state.input.length} />
        {char}
      </div>
    );
  }
}

export default App;
