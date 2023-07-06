import React, { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css"; // Uključivanje CSS fajla sa stilovima

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list"> {/* Dodajte atribut className */}
        {monsters.map((monster) => { 
          {/*Korišćenje metode `map()` nad `monsters` nizom 
          kako bi se prikazala `Card` komponenta za svako čudovište.*/}
          return (
            <Card monster={monster} /> // Prikazivanje komponente Card za svako čudovište
          );
        })}
      </div>
    );
  }
}

export default CardList;
