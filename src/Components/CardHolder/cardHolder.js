import React, { Component } from "react";
import AppContext from "../../AppContext";
import Card from "../Card/card"
import {getUserbase} from "../../services/userServices"
import { normalizeData, denormalizeData } from "../../utils/dataUtils";

class CardHolder extends Component {
  static contextType = AppContext;
  
  
  componentDidMount() {
    const { userbase, user } = this.context.state;
    const { setUserbase } = this.context;
    const { history } = this.props;
  
    if (!user._id) {
      history.push("/login");
    } else {
      if (denormalizeData(userbase).length < 1) {
        getUserbase().then((res) => {
          const { result } = res.data;
          const userbase = normalizeData(result);
          setUserbase(userbase);
        });
      }
    }
  }

  render() {
    const { userbase, user } = this.context.state;
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
            {denormalizeData(userbase).map((userItem, index) => (
              <Card key={index} {...userItem} userId={user._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CardHolder;