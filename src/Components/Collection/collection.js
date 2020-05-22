import React, { Component } from "react";
import Searchbar from "../Searchbar/searchbar";
import CardHolder from "../CardHolder/cardHolder"
import CardDetail from "../CardDetail/cardDetail"

class Collection extends Component {
  state={
    model: this.props.match.params.model
  }
  render() {
    console.log(this.state.model)
    return (
      <div>
      <h1>{this.props.match.params.model}</h1>
        <Searchbar />
        <div>
          <CardHolder />
          <CardDetail />
        </div>
      </div>
    );
  }
}

export default Collection;
