import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <span uk-search-icon="true"></span>
          <input
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
