import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
dayjs.extend(relativeTime);

class Card extends Component {

  handleClick = (e) => {
    const {setItem, _id} = this.props;
    e.preventDefault();
    setItem(_id);
  }

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
      interests,
      price,
      service_type,
      transport_type,
      client,
      initial_date,
      final_date,
      status,
    } = this.props;

    const {handleClick} = this;

    return (
      <div
        className="uk-margin-small-left uk-margin-small-top uk-padding-remove uk-card uk-card-small uk-card-hover"
        uk-grid="true"
      >
        <div className="uk-padding-remove uk-cover-container uk-card-media-left">
          <Slider images={images} />
        </div>
        <div className="uk-padding-remove uk-margin-small uk-card-body uk-text-top" onClick={handleClick}>
          <h3 className="uk-text-top uk-padding-remove uk-card-title">
            {name} {last_name}
          </h3>
          <div className="uk-text-top">
            {(() => {
              switch (model) {
                case "userbase":
                  return (
                    <div>
                      <div>
                        <b>Email:</b> {email}
                      </div>
                      <div>
                        <b>Role:</b> {role}
                      </div>
                    </div>
                  );
                  break;
                case "clients":
                  return (
                    <div>
                      <div>
                        <b>Email:</b> {email}
                      </div>
                      <div>
                        <b>Role:</b> {role}
                      </div>
                    </div>
                  );
                case "hotels":
                  return (
                    <div>
                      <div>
                        <b>City:</b> {city}
                      </div>
                      <div>
                        <b>Types:</b> {types}
                      </div>
                      <div>
                        <b>Interests:</b> {interests}
                      </div>
                      <div>
                        <b>Price:</b> {price}
                      </div>
                    </div>
                  );
                  break;
                case "restaurants":
                  return (
                    <div>
                      <div>
                        <b>City:</b> {city}
                      </div>
                      <div>
                        <b>Types:</b> {types}
                      </div>
                      <div>
                        <b>Interests:</b> {interests}
                      </div>
                      <div>
                        <b>Price:</b> {price}{" "}
                      </div>
                    </div>
                  );
                  break;
                case "experiences":
                  return (
                    <div>
                      <div>
                        <b>City:</b> {city}
                      </div>
                      <div>
                        <b>Types:</b> {types}
                      </div>
                      <div>
                        <b>Interests:</b> {interests}
                      </div>
                      <div>
                        <b>Price:</b> {price}
                      </div>
                    </div>
                  );
                  break;
                case "transports":
                  return (
                    <div>
                      <div>
                        <b>Service type:</b> {service_type}
                      </div>
                      <div>
                        <b>Transport type:</b> {transport_type}
                      </div>
                      <div>
                        <b>Price:</b> {price}
                      </div>
                    </div>
                  );
                  break;
                case "reservations":
                  return (
                    <div>
                      <div>
                        <b>Client:</b> {client}
                      </div>
                      <div>
                        From {initial_date} to {final_date}
                      </div>
                      <div>
                        {final_date - initial_date} <b>days</b>
                      </div>
                      <div>
                        <b>Status:</b> {status}
                      </div>
                    </div>
                  );
                  break;
              }
            })()}
          </div>
          <div className="uk-card-footer">
            <a
              href="#"
              className="uk-button uk-button-text"
              onClick={handleClick}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
