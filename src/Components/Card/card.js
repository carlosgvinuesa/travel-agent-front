import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import DetailModal from "../DetailModal/detailModal";
dayjs.extend(relativeTime);

class Card extends Component {
  
  handleClick = (e) => {
    const { setItem, _id } = this.props;
    e.preventDefault();
    setItem(_id);
  };

  render() {
    const {
      images = [],
      name,
      last_name,
      email,
      role,
      model,
      city,
      types,
      food_types,
      interests,
      price,
      service_type,
      transport_type,
      client,
      initial_date,
      final_date,
      status,
      user,
      detail,
      item,
      setItem,
    } = this.props;

    const { handleClick } = this;

    return (
      <div
        className="uk-margin-small-left uk-margin-small-top uk-padding-remove uk-card uk-card-small uk-card-hover"
        uk-grid="true"
      >
        <div className="uk-padding-remove uk-cover-container uk-card-media-left">
          <Slider images={images} />
        </div>
        <div
          className="uk-padding-remove uk-margin-small uk-card-body uk-text-top"
          onClick={handleClick}
          href="#cardDetailModal"
          uk-toggle="target: #cardDetailModal"
        >
          <h3 className="uk-text-top uk-padding-remove uk-card-title">
            {name} {last_name}
          </h3>
          <div>
            {email === undefined ? null : (
              <div className="uk-margin-small">
                <b>Email:</b> {email}
              </div>
            )}
            {role === undefined ? null : (
              <div className="uk-margin-small">
                <b>Role:</b> {role}
              </div>
            )}
            {city === undefined ? null : (
              <div className="uk-margin-small">
                <b>City:</b> {city}
              </div>
            )}
            {price === undefined || price < 1 ? null : (
              <div className="uk-margin-small">
                <b>Price:</b> {price}
              </div>
            )}
            {service_type === undefined ? null : (
              <div className="uk-margin-small">
                <b>Service type:</b> {service_type}
              </div>
            )}
            {transport_type === undefined ? null : (
              <div className="uk-margin-small">
                <b>Transport type:</b> {transport_type}
              </div>
            )}
            {types === undefined || types.length < 1 ? null : (
              <div className="uk-margin-small">
                <b>Types:</b> {types}
              </div>
            )}
            {food_types === undefined || food_types.length < 1 ? null : (
              <div className="uk-margin-small">
                <b>Food types:</b> {food_types}
              </div>
            )}
            {interests === undefined || interests.length < 1 ? null : (
              <div className="uk-margin-small">
                <b>Interests:</b> {interests}
              </div>
            )}
          </div>

          <DetailModal
            model={model}
            user={user}
            detail={detail}
            item={item}
            setItem={setItem}
          />
        </div>
      </div>
    );
  }
}

export default Card;
