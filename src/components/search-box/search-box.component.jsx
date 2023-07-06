import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        className={'search-box ${this.props.className}'} // Dodavanje klase 'search-box' sa vrednošću prop-a 'className'
        type="search"
        placeholder={this.props.placeholder} // Postavljanje atributa 'placeholder' na vrednost prop-a 'placeholder'
        onChange={this.props.onChangeHandler} // Postavljanje event handlera na vrednost prop-a 'onChangeHandler'
      />
    );
  }
}

export default SearchBox;
