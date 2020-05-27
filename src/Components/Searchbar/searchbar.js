import React, { Component } from "react";
import AppContext from "../../AppContext";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";

class Searchbar extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <span uk-search-icon="true"></span>
          <input
            onChange={this.context.handleChange}
            className="uk-search-input"
            type="search"
            placeholder="Search..."
          ></input>
        </form>
      </div>
    );
  }
}
export default Searchbar;
