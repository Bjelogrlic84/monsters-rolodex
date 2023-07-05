import React, { Component } from "react";
import "./card-list.styles.css"; // Uključite CSS fajl sa stilovima

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    
    return (
      <div className="card-list"> {/* Dodajte className atribut */}
        {monsters.map((monster) => (
          <div className="card-container" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2`}
              style={{ width: "180px", height: "180px" }}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
