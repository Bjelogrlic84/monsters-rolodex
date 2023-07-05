import React, { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css"; // Uključite CSS fajl sa stilovima

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    
    return (
      <div className="card-list"> {/* Dodajte className atribut */}
        {monsters.map((monster) => {
          
          return (
          <Card monster={monster} />
        );
        })}
      </div>
    );
  }
}

export default CardList;
