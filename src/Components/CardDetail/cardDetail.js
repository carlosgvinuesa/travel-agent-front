import { deleteUser } from "../../services/userServices";
import { deleteRestaurant } from "../../services/restaurantServices";
import { deleteHotel } from "../../services/hotelServices";
import { deleteClient } from "../../services/clientServices";
import { deleteExperience } from "../../services/experienceServices";
import { deleteTransport } from "../../services/transportServices";
import { deleteReservation } from "../../services/reservationServices";
import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
dayjs.extend(relativeTime);


const deleteServices = {
  restaurants: deleteRestaurant,
  hotels: deleteHotel,
  clients: deleteClient,
  userbase: deleteUser,
  experiences: deleteExperience,
  transports: deleteTransport,
  reservations: deleteReservation,
};

class CardDetail extends Component {
  deleteItem = () => {
    const { model, item, setItem } = this.props;
    deleteServices[model](item)
    setItem({});
    console.log(`boton de borrar ${item}`);
  };

  render() {
    const {
      images = [],
      name,
      last_name,
      email,
      role,
      city,
      types,
      food_types,
      interests,
      price,
      service_type,
      transport_type,
      address,
      phone_numbers,
      description,
      comments,
      contacts,
      initial_date,
      final_date,
      status,
    } = this.props;
    const isSelected = name === undefined;
    return (
      <div className="uk-card uk-card-small" uk-grid="true">
        {isSelected ? (
          <div>Select one item on the left to see the detail</div>
        ) : (
          <div>
            <div className="uk-margin-small uk-card-body uk-text-top">
              <h3 className="uk-text-top uk-card-title">
                {name} {last_name}
              </h3>
              <div>
                <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                  {description === undefined ? null : (
                    <div className="uk-margin-left uk-margin">
                      <b>Description:</b> {description}
                    </div>
                  )}
                  {email === undefined ? null : (
                    <div>
                      <b>Email:</b> {email}
                    </div>
                  )}
                  {role === undefined ? null : (
                    <div>
                      <b>Role:</b> {role}
                    </div>
                  )}
                  {price === undefined || price < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Price:</b> {price}
                    </div>
                  )}
                  {city === undefined ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>City:</b> {city}
                    </div>
                  )}
                  {service_type === undefined ? null : (
                    <div>
                      <b>Service type:</b> {service_type}
                    </div>
                  )}
                  {transport_type === undefined ? null : (
                    <div>
                      <b>Transport type:</b> {transport_type}
                    </div>
                  )}
                  {types === undefined || types.length < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Types:</b> {types}
                    </div>
                  )}
                  {food_types === undefined || food_types.length < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Food types:</b> {food_types}
                    </div>
                  )}
                  {interests === undefined || interests.length < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Interests:</b> {interests}
                    </div>
                  )}
                  {address === undefined ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Address:</b> {address}
                    </div>
                  )}
                  {comments === undefined ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Comments:</b> {comments}
                    </div>
                  )}
                  {phone_numbers === undefined ||
                  phone_numbers.length < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Phone:</b> {phone_numbers}
                    </div>
                  )}
                  {contacts === undefined || contacts.length < 1 ? null : (
                    <div className="uk-margin-left uk-margin-small">
                      <b>Contacts:</b> {contacts}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button className="uk-button uk-button-default uk-button-small uk-width-small">
                EDIT
              </button>
              <button
                className="uk-button uk-button-danger uk-button-small uk-width-small"
                uk-toggle="target: #delWarning"
              >
                DELETE
              </button>
              <div id="delWarning" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                  <h2 className="uk-modal-title">Warning!</h2>
                  <p>
                    Are you sure you want to delete? This action is
                    irreversible!
                  </p>
                  <p className="uk-text-right">
                    <button
                      className="uk-button uk-button-default uk-modal-close"
                      type="button"
                    >
                      CANCEL
                    </button>
                    <button
                      className="uk-button uk-button-danger uk-modal-close"
                      type="button"
                      onClick={this.deleteItem}
                    >
                      DELETE
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-padding-remove uk-cover-container uk-margin">
              <Slider images={images} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardDetail;
