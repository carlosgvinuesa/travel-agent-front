import React, { Component } from "react";
import Searchbar from "../Searchbar/searchbar";
import CardHolder from "../CardHolder/cardHolder";
import CardDetail from "../CardDetail/cardDetail";
import AppContext from "../../AppContext";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";
import { getRestaurants } from "../../services/restaurantServices";
import { getHotels } from "../../services/hotelServices";
import { getClients } from "../../services/clientServices";
import { getUserbase } from "../../services/userServices";
import { getExperiences } from "../../services/experienceServices";
import { getTransports } from "../../services/transportServices";
import { getReservations } from "../../services/reservationServices";

const services = {
  restaurants: getRestaurants,
  hotels: getHotels,
  clients: getClients,
  userbase: getUserbase,
  experiences: getExperiences,
  transports: getTransports,
  reservations: getReservations,
};

class Collection extends Component {
  static contextType = AppContext;

  state = {
    model: "",
    item: {},
  };

  setModel = (model) => {
    this.setState({ model });
  };
  
  setItem = (item) => {
    this.setState({ item });
  };

  componentDidMount() {
    const { user } = this.context.state;
    const { setBase } = this.context;
    const { model } = this.props.match.params;
    const { history } = this.props;

    if (!user._id) {
      history.push("/login");
    } else {
      services[model]().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setBase(data);
        this.setModel(model);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.model !== this.props.match.params.model) {
      const { user } = this.context.state;
      const { setBase } = this.context;
      const { model } = nextProps.match.params;
      const { history } = this.props;

      if (!user._id) {
        history.push("/login");
      } else {
        services[model]().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setBase(data);
          this.setModel(model);
        });
      }
    }
  }

  render() {
    const { base, user } = this.context.state;
    const { model, item } = this.state;
    const detail = denormalizeData(base).find(x => x._id === item);
    return (
      <div>
        <h1>{this.props.match.params.model.toUpperCase()}</h1>
        <Searchbar />
        <div className="uk-grid">
          <div className="uk-margin-small-left uk-margin-small uk-width-1-2">
            <CardHolder base={base} user={user} model={model} setItem={this.setItem}/>
          </div>
          <div className="uk-width-expand">
            <CardDetail user={user} model={model} {...detail} />
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
