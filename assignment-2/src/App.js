import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
