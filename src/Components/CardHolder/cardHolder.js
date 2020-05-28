import React, { Component } from "react";
import Card from "../Card/card";

import { denormalizeData } from "../../utils/dataUtils";

class CardHolder extends Component {
  render() {
    const { filtered, user, model, setItem } = this.props;
    return (
        <div className="uk-grid uk-grid-small uk-child-width-expand@s uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-3@s">
          {denormalizeData(filtered).map((userItem, index) => (
            <Card key={index} {...userItem} userId={user._id} model={model} setItem={setItem}/>
          ))}
        </div>
    );
  }
}

export default CardHolder;
