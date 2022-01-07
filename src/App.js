import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox  } from './components/search-box/search-box.component';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { // state only lives in one place but trickles down through the components as props
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this); don't need to bind if using arrow function
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }) 
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange = { this.handleChange }
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React or SMB
//         </a>
//       </header>
//     </div>
//   );
// }


// GitHub Authorisatiopn Token -----------  vscode:/ /
// vscode.github-authentication/did-authenticate?windowid=1&code=09911064f72375d12f2b&state=98d66e4c-fead-447d-8485-1123cc241b1a 


 