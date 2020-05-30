import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import AppContext from "../../AppContext";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import DetailModal from "../DetailModal/detailModal";
import { normalizeData, denormalizeData } from "../../utils/dataUtils";

dayjs.extend(relativeTime);

const currencyFormat = (num = 0) => {
  let format = /[$]/;
  if (format.test(num)) {
    num = num.replace("$", "");
  }
  num = parseFloat(num);
  let str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  let result = str.join(".");
  result = `$ ${result}`;
  return result;
};

class ReservationCard extends Component {
  static contextType = AppContext;
  
  handleClick = (e) => {
    const { setItemId, _id, base, setItem } = this.props;
    const item = denormalizeData(base).find(x => x._id === _id);
    e.preventDefault();
    setItemId(_id);
    setItem(item)
    console.log(" de reservation estoy aqui", item)
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
      schedule,
      initial_date,
      final_date,
      status,
      user,
      detail,
      itemId,
      item,
      setItemId,
      number_of_guests,
      demo = false,
    } = this.props;

    const { handleClick } = this;
    const experiencesBase = denormalizeData(this.context.state.experiencesBase);
    console.log(schedule[0].experience)
    const expImages = experiencesBase.find(x => x.name === schedule[0].experience).images
    return (
      <div
        className="uk-margin-small-left uk-margin-small-top uk-padding-remove uk-card uk-card-small uk-card-hover"
        uk-grid="true"
      >
        <div className="uk-padding-remove uk-cover-container uk-card-media-left">
          <Slider images={expImages} />
        </div>
        <div
          className="uk-padding-remove uk-margin-small uk-card-body uk-text-top"
          onClick={handleClick}
          href="#reservationModal"
          uk-toggle="target: #reservationModal"
        >
          <h3 className="uk-text-top uk-padding-remove uk-card-title">
            {name}
          </h3>
          <div>
            {status === undefined ? null : (
              <div className="uk-margin-small">
                <b>From:</b> {initial_date} <b>To:</b> {final_date}
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
            {interests === undefined || interests.length < 1 ? null : (
              <div className="uk-margin-small">
                <b>Interests:</b> {interests}
              </div>
            )}
            {number_of_guests === undefined ? null : (
              <div className="uk-margin-small">
                <b>Interests:</b> {number_of_guests}
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default ReservationCard;
