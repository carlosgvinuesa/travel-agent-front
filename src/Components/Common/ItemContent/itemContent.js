import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
dayjs.extend(relativeTime);

class ItemContent extends Component {
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

    return (
      <div className="uk-card " uk-grid="true">
        <div>
          <div className="uk-margin-small uk-padding-remove uk-card-body uk-text-top">
            <div>
              <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                {name === undefined ? null : (
                  <h1 className="uk-margin-left uk-margin">
                    <b>Name:</b> {name}
                  </h1>
                )}
                {last_name === undefined ? null : (
                  <h1 className="uk-margin-left uk-margin">
                    <b>Last Name:</b> {last_name}
                  </h1>
                )}
                {email === undefined ? null : (
                  <div className="uk-margin-left uk-margin">
                    <b>Email:</b> {email}
                  </div>
                )}
                {role === undefined ? null : (
                  <div className="uk-margin-left uk-margin">
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
                  <div className="uk-margin-left uk-margin">
                    <b>Service type:</b> {service_type}
                  </div>
                )}
                {transport_type === undefined ? null : (
                  <div className="uk-margin-left uk-margin">
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
                {comments === undefined ? null : (
                  <div className="uk-margin-left uk-margin-small">
                    <b>Comments:</b> {comments}
                  </div>
                )}
                {description === undefined ? null : (
                  <div className="uk-margin-left uk-margin">
                    <b>Description:</b> {description}
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemContent;
