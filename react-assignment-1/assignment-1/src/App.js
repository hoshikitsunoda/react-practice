import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = { username: 'Hoshiki' }

  inputValueChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          value={this.state.username}
          changed={this.inputValueChangeHandler} />
        <UserOutput
          userName={this.state.username} />
        <UserOutput
          userName={this.state.username} />
        <UserOutput
          userName="Hoshiki" />
      </div>
    );
  }
}

export default App;
