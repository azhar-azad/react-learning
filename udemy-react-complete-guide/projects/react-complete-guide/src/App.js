import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";
import Validation from './Validation/Validation';
import Char from './Char/Char';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Azad', age: 28 },
      { id: 'saf', name: 'Tipu', age: 30 },
      { id: 'vzxv', name: 'Akib', age: 29 }
    ],
    otherPersons: [
      { name: 'Other Persons name', age: 111 }
    ],
    username: 'random-username',
    showPersons: false,
    userInput: ''
  };
  
  // switchNameHandler = (newName) => {
  //   // DON'T DO THIS: this.state.persons[0].name='Azhar Uddin';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Tipu', age: 30 },
  //       { name: 'Akib', age: 33 }
  //     ]
  //   });
  // };
  
  // two way binding
  nameChangedHandler = (event, id) => {
    // get the index of the person with id(from argument)
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    
    // create a copy of the person object that has the personIndex
    const personCopy = {
      ...this.state.persons[personIndex]
    };
    
    // change the name attribute of person object copy
    personCopy.name = event.target.value;
    
    // create a copy of the persons array
    const personsCopy = [...this.state.persons];
    // change the array(copy) with the updated person(copy)
    personsCopy[personIndex] = personCopy;
    
    // finally, change the state
    this.setState({
      persons: personsCopy
    });
  };
  
  usernameClickHandler = (newUsername) => {
    this.setState({
      username: newUsername
    });
  };
  
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice without arguments simply copies the array and returns the copy
    const persons = [...this.state.persons];  // spread operator(...) does the same like splice() without arguments. Use any to make a copy of the persons array
    persons.splice(personIndex, 1); // removes one element from the array starting from personIndex
    this.setState({persons: persons});
  };
  
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  };
  
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  };
  
  render() {
    const switchNameBtnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)}
                           name={person.name}
                           age={person.age}
                           key={person.id}
                           changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // switchNameBtnStyle.backgroundColor = 'red';
      // switchNameBtnStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
    });
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {/*<button style={switchNameBtnStyle}*/}
          {/*onClick={this.togglePersonsHandler}>Toggle Persons</button>*/}
        
        {persons}
        
        {/*lists and conditionals exercise*/}
        {/*<div>*/}
          {/*<br/>*/}
          {/*<input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>*/}
          {/*<p>{this.state.userInput}</p>*/}
          {/*<Validation inputLength={this.state.userInput.length} />*/}
          {/*{charList}*/}
        {/*</div>*/}
        
        {/*basic react module exercise*/}
        {/*<UserInput changed={this.usernameChangeHandler} currentName={this.state.username} />*/}
        {/*<UserOutput userName={this.state.username} />*/}
        {/*<UserOutput userName={this.state.username} click={this.usernameClickHandler.bind(this, 'New Username')}/>*/}
        {/*<UserOutput userName="user3" />*/}
      </div>
    );
  }
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;



