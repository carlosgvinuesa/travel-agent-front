import React, { Component } from "react";
import Searchbar from "../Searchbar/searchbar";
import Card from "../Card/card";
import ReservationCard from "../Card/reservationCard"
import AppContext from "../../AppContext";
import CreateModal from "../Forms/AllModals/createModal";
import { Link } from "react-router-dom";
import "./collection.css";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";
import { getRestaurants } from "../../services/restaurantServices";
import { getHotels } from "../../services/hotelServices";
import { getClients } from "../../services/clientServices";
import { getUserbase } from "../../services/userServices";
import { getExperiences } from "../../services/experienceServices";
import { getTransports } from "../../services/transportServices";
import { getReservations } from "../../services/reservationServices";
import DetailModal from "../DetailModal/detailModal";
import ReservationModal from "../ReservationModal/reservationModal"

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
    itemId: {},
    item: {},
  };

  setModel = (model) => {
    this.setState({ model });
  };

  setItemId = (itemId) => {
    this.setState({ itemId });
  };

  setItem = (item) => {
    this.setState({ item });
  };

  componentDidMount() {
    const { user, base } = this.context.state;
    const {
      setBase,
      setFiltered,
      setRestaurantsBase,
      setReservationsBase,
      setExperiencesBase,
      setTransportsBase,
      setUsersBase,
      setHotelsBase,
    } = this.context;
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
      getRestaurants().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setRestaurantsBase(data);
      });
      getReservations().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setReservationsBase(data);
      });
      getExperiences().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setExperiencesBase(data);
      });
      getTransports().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setTransportsBase(data);
      });
      getUserbase().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setUsersBase(data);
      });
      getHotels().then((res) => {
        const { result } = res.data;
        const data = normalizeData(result);
        setHotelsBase(data);
      });
    }
  }
  handleChange = (e) => {
    let { item, model } = this.state;

    item = { ...item, [e.target.name]: e.target.value };
    if (model === "transports") {
      const service_type = document.getElementById("servie_type").value;
      const vehicle_type = document.getElementById("vehicle_type").value;
      item = {
        ...item,
        service_type: service_type,
        vehicle_type: vehicle_type,
      };
    }
    this.setState({ item });
  };

  handleImagesChange = (e) => {
    let { item } = this.state;
    item = { ...item, [e.target.name]: e.target.value.split(",") };
    this.setState({ item });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.model !== this.props.match.params.model) {
      const { user, base } = this.context.state;
      const {
        setBase,
        setFiltered,
        setRestaurantsBase,
        setReservationsBase,
        setExperiencesBase,
        setTransportsBase,
        setUsersBase,
        setHotelsBase,
      } = this.context;
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
        getRestaurants().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setRestaurantsBase(data);
        });
        getReservations().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setReservationsBase(data);
        });
        getExperiences().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setExperiencesBase(data);
        });
        getTransports().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setTransportsBase(data);
        });
        getUserbase().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setUsersBase(data);
        });
        getHotels().then((res) => {
          const { result } = res.data;
          const data = normalizeData(result);
          setHotelsBase(data);
        });
      }
    }
  }

  render() {
    const { base, user, filtered } = this.context.state;
    const { model, itemId, item } = this.state;
    const iniFilter = filtered === undefined ? base : filtered;
    return (
      <div>
        <h1 className="uk-margin-small-top">
          {this.props.match.params.model.toUpperCase()}
        </h1>

        <Searchbar />

        <div className="uk-flex uk-flex-row-reverse uk-margin-xlarge-right">
          {model !== "reservations" ? (
            <button
              className="uk-button uk-button-default"
              uk-toggle={`target: #${model}-new`}
              type="button"
            >
              Add new {model.slice(0, -1)}
            </button>
          ) : (
            <Link
              className="uk-button uk-button-default"
              to="/reservations/new"
            >
              New Reservation
            </Link>
          )}
        </div>

        <CreateModal model={model} title={model.slice(0, -1)} />

        <div>
          <div
            className="uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2@xs uk-grid-match uk-flex-center"
            uk-grid="true"
          >
            {model !== "reservations" ? denormalizeData(iniFilter).map((userItem, index) => (
              <Card
                key={index}
                {...userItem}
                item={item}
                user={user}
                itemId={itemId}
                userId={user._id}
                model={model}
                setItemId={this.setItemId}
                setItem={this.setItem}
                base={base}
              />
            )): denormalizeData(iniFilter).map((userItem, index) => (
              <ReservationCard
                key={index}
                {...userItem}
                item={item}
                user={user}
                itemId={itemId}
                userId={user._id}
                model={model}
                setItemId={this.setItemId}
                setItem={this.setItem}
                base={base}
              />
            ))}
          </div>
          <DetailModal
            model={model}
            user={user}
            item={item}
            itemId={itemId}
            setItemId={this.setItemId}
            handleChange={this.handleChange}
            handleImagesChange={this.handleImagesChange}
          />
          <ReservationModal
            model={model}
            user={user}
            item={item}
            itemId={itemId}
            setItemId={this.setItemId}
            handleChange={this.handleChange}
            handleImagesChange={this.handleImagesChange}
          />
        </div>
      </div>
    );
  }
}
// className="uk-panel uk-panel-scrollable max-height"
export default Collection;
