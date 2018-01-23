import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
  state = {
    input: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.input} />
        <p>{this.state.input.length}</p>
        <ValidationComponent inputLength={this.state.input.length} />
      </div>
    );
  }
}

export default App;
