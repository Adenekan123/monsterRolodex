import { Component } from "react";

class CardLists extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div>
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardLists;
