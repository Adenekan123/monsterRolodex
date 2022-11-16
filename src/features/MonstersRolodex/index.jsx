import { Component } from "react";

import SearchBox from "./components/SearchBox";
import CardLists from "./components/CardLists";

import "../../App.css";
class MonstersRolodex extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      textField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        this.setState(
          () => {
            return { monsters };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleSearch = (e) => {
    this.setState(
      () => {
        return { textField: e.target.value.toLowerCase() };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const { monsters, textField } = this.state;
    const { handleSearch } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(textField)
    );
    return (
      <>
        <SearchBox onChangeHandler={handleSearch} />
        <CardLists filteredMonsters={filteredMonsters} />
      </>
    );
  }
}

export default MonstersRolodex;
