import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Hosh', age: 33 },
      { name: 'Ash', age: 31 },
      { name: 'shiru', age: 2 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Hoshiki'
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Ash', age: 31 },
        { name: 'shiru', age: -22 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Hosh', age: 33 },
        { name: event.target.value, age: 31 },
        { name: 'shiru', age: -22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Hoshiki!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Seiki')}
          changed={this.nameChangedHandler}>My Hobbies: 柔術</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
