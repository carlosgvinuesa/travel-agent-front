import React, { Component } from "react";
import Searchbar from "../Searchbar/searchbar";
import CardHolder from "../CardHolder/cardHolder";
import CardDetail from "../CardDetail/cardDetail";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";
import { getRestaurants } from "../../services/restaurantServices";
import { getHotels } from "../../services/hotelServices";
import { getClients } from "../../services/clientServices";
import { getUserbase } from "../../services/userServices";
import { getExperiences } from "../../services/experienceServices";
import { getTransports } from "../../services/transportServices";
import { getReservations } from "../../services/reservationServices";

const getServices = {
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
    const { user, base } = this.context.state;
    const { setBase, setFiltered } = this.context;
    const { model } = this.props.match.params;
    const { history } = this.props;

    if (!user._id) {
      history.push("/login");
    } else {
      getServices[model]().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setBase(data);
        setFiltered(this.props.filtered);
        this.setModel(model);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.model !== this.props.match.params.model) {
      const { user, base } = this.context.state;
      const { setBase, setFiltered } = this.context;
      const { model } = nextProps.match.params;
      const { history } = this.props;

      if (!user._id) {
        history.push("/login");
      } else {
        getServices[model]().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setBase(data);
          setFiltered(this.props.filtered);
          this.setModel(model);
        });
      }
    }
  }

  render() {
    const { base, user, filtered } = this.context.state;
    const { model, item } = this.state;
    const detail = denormalizeData(base).find(x => x._id === item);
    const iniFilter = filtered === undefined ? base : filtered;
    return (
      <div>
      <div className="uk-flex uk-margin-left uk-margin-small-top">
          <button className="uk-button uk-button-default uk-button-small">
            <Link className="uk-link-reset" to={`/${model}/new`}>Add new {model.slice(0, -1)}</Link>
          </button>
        </div>
        <h1 className="uk-margin-small-top" >{this.props.match.params.model.toUpperCase()}</h1>
        <Searchbar />
        <div className="uk-grid">
          <div className="uk-margin-small-left uk-margin-small uk-width-1-2">
            <CardHolder filtered={iniFilter} user={user} model={model} setItem={this.setItem} />
          </div>
          <div className="uk-width-expand">
            <CardDetail user={user} model={model} {...detail} item={item} setItem={this.setItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
