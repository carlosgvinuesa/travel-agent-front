import React, { Component } from "react";
import AppContext from "../../AppContext";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";

class Searchbar extends Component {
  static contextType = AppContext;

  // handleChange = (e) => {
  //   const { base } = this.context.state;
  //   const { setFilteredBase } = this.context;
  //   const withFilter = denormalizeData(base).filter((x) =>
  //     x.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   const normWithFilter = normalizeData(withFilter)
  //   e.preventDefault();
  //   console.log(normWithFilter);
  //   // setFilteredBase({withFilter});
  // };
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
