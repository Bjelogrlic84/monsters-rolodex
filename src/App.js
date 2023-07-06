import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    // Inicijalizacija stanja komponente
    this.state = {
      monsters: [], // Niz čudovišta
      searchField: "", // Polje za pretragu
    };
  }

  // Metoda koja se poziva nakon montiranja komponente
  componentDidMount() {
    // Dohvatanje podataka sa servera
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users })); // Ažuriranje stanja komponente sa dobavljenim podacima
  }

  // Metoda koja se poziva kada se vrednost polja za pretragu promeni
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }; // Ažuriranje stanja komponente sa novom vrednošću polja za pretragu
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Filtriranje čudovišta na osnovu unete vrednosti u polje za pretragu
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        {/* Komponenta za unos polja za pretragu */}
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
        />

        {/* Komponenta koja prikazuje kartice čudovišta */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
