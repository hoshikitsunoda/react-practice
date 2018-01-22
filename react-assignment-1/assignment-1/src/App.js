import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [
      { name: 'Hoshiki' },
      { name: 'Ashley' },
      { name: 'Shirugami' }
    ]
  }

  inputValueChangeHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value },
        { name: event.target.value },
        { name: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName={this.state.users[0].name} />
        <UserOutput userName={this.state.users[1].name} />
        <UserOutput userName={this.state.users[2].name} />
      </div>
    );
  }
}

export default App;
