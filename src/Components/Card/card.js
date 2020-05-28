import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import CardDetail from "../CardDetail/cardDetail";
import DetailModal from "../DetailModal/detailModal"
dayjs.extend(relativeTime);

class Card extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps._id !== this.props._id) {
      const { setItem, _id } = nextProps;
      setItem(_id);
    }
  }

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
    console.log(detail);

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
                      {city === undefined ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>City:</b> {city}
                        </div>
                      )}
                      <div className="uk-margin-left uk-margin-small-top">
                        <b>Types:</b> {types}
                      </div>
                      <div className="uk-margin-left uk-margin-small">
                        <b>Interests:</b> {interests}
                      </div>
                      {price < 1 ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>Price:</b> {price}
                        </div>
                      )}
                    </div>
                  );
                  break;
                case "restaurants":
                  return (
                    <div>
                      <div className="uk-margin-left uk-margin-small">
                        <b>City:</b> {city}
                      </div>
                      <div className="uk-margin-left uk-margin-small-top">
                        <b>Types:</b> {types}
                      </div>
                      <div className="uk-margin-left uk-margin-small-top">
                        <b>Food types:</b> {food_types}
                      </div>
                      <div className="uk-margin-left uk-margin-small">
                        <b>Interests:</b> {interests}
                      </div>
                      {price < 1 ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>Price:</b> {price}
                        </div>
                      )}
                    </div>
                  );
                  break;
                case "experiences":
                  return (
                    <div>
                      {city === undefined ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>City:</b> {city}
                        </div>
                      )}
                      <div className="uk-margin-left uk-margin-small-top">
                        <b>Types:</b> {types}
                      </div>
                      <div className="uk-margin-left uk-margin-small">
                        <b>Interests:</b> {interests}
                      </div>
                      {price < 1 ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>Price:</b> {price}
                        </div>
                      )}
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
                      {price < 1 ? null : (
                        <div className="uk-margin-left uk-margin-small">
                          <b>Price:</b> {price}
                        </div>
                      )}
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
          <DetailModal  name={name} last_name={last_name} model={model} user={user} detail={detail} item={item} setItem={setItem}/>
        </div>
      </div>
    );
  }
}

export default Card;
