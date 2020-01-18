import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchField: ''
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
    console.log(this.state.monsters)
  }
  handleInputChange = (event) => {
    this.setState({ searchField: event.target.value }, () => {
      console.log(this.state)
    })
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox placeholder='search monsters' monsterSearch={this.handleInputChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
export default App;
