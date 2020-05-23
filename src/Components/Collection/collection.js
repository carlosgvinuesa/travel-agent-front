import React, { Component } from "react";
import Searchbar from "../Searchbar/searchbar";
import CardHolder from "../CardHolder/cardHolder";
import CardDetail from "../CardDetail/cardDetail";
import AppContext from "../../AppContext"
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

  componentDidMount() {
    const { user } = this.context.state;
    const { setBase } = this.context;
    const { model } = this.props.match.params;
    const { history } = this.props;

    if (!user._id) {
      history.push("/login");
    } else {
      services[model]().then((res) => {
        console.log(res.data);
        const { result } = res.data;
        const data = normalizeData(result);
        setBase(data);
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
          console.log(res.data);
          const { result } = res.data;
          const data = normalizeData(result);
          setBase(data);
        });
      }
    }
  }

  render() {
    const { base, user } = this.context.state;
    return (
      <div>
        <h1>{this.props.match.params.model.toUpperCase()}</h1>
        <Searchbar />
        <div className="uk-flex-inline uk-grid">
          <div className="uk-width-2-3">
            <CardHolder base={base} user={user} />
          </div>
          <div>
            <CardDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
