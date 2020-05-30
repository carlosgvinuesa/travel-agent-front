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

class Day extends Component {
  static contextType = AppContext;

  render() {
    const {experience, transport, hotel, restaurant, index} = this.props;
  
    console.log("loguea el schedule", experience)

    const experiencesBase = denormalizeData(this.context.state.experiencesBase);
    const restaurantsBase = denormalizeData(this.context.state.restaurantsBase);
    const transportsBase = denormalizeData(this.context.state.transportsBase);
    const hotelsBase = denormalizeData(this.context.state.hotelsBase);
    
    // const experience2 = experiencesBase.find((x) => x.name === experience);
    // const restaurant2 = restaurantsBase.find((x) => x.name === restaurant);
    // const transport2 = transportsBase.find((x) => x.name === transport);
    // const hotel2 = hotelsBase.find((x) => x.name === hotel);
  
    // console.log(experience)
    return ( experience !== undefined ? 
      <div>
        <div className=" uk-child-width-1-5 uk-margin-small-left uk-margin-small-top uk-padding-remove uk-card uk-card-small uk-card-hover" uk-grid="true">
          <h1 className="uk-card-title uk-margin-small-top">
            Day {index + 1} - ${experiencesBase.find((x) => x.name === experience).price + 
              restaurantsBase.find((x) => x.name === restaurant).price +
              transportsBase.find((x) => x.name === transport).price +
              hotelsBase.find((x) => x.name === hotel).price} MXN
          </h1>

          <div className="uk-card uk-card-default uk-padding-remove">
            <div className="uk-padding-remove uk-cover-container uk-card-media-top">
              <Slider images={experiencesBase.find((x) => x.name === experience).images} />
            </div>
            <div className="uk-card-body uk-margin-small-top">
              <div className="uk-margin-small">
                <h3>{experiencesBase.find((x) => x.name === experience).name}</h3> 
              </div>
              <div className="uk-margin-small">
                <b>City:</b> {experiencesBase.find((x) => x.name === experience).city}
              </div>
              <div className="uk-margin-small">
                <b>Price:</b> {experiencesBase.find((x) => x.name === experience).price}
              </div>
              <div className="uk-margin-small">
                <b>Interests:</b> {experiencesBase.find((x) => x.name === experience).interests}
              </div>
            </div>
          </div>

          <div className="uk-card uk-card-default uk-padding-remove">
            <div className="uk-padding-remove uk-cover-container uk-card-media-top">
              <Slider images={restaurantsBase.find((x) => x.name === restaurant).images} />
            </div>
            <div className="uk-card-body uk-margin-small-top">
              <div className="uk-margin-small">
                <h3>{restaurantsBase.find((x) => x.name === restaurant).name}</h3> 
              </div>
              <div className="uk-margin-small">
                <b>City:</b> {restaurantsBase.find((x) => x.name === restaurant).city}
              </div>
              <div className="uk-margin-small">
               <b>Price:</b> {restaurantsBase.find((x) => x.name === restaurant).price}
              </div>
              <div className="uk-margin-small">
                <b>Interests:</b> {restaurantsBase.find((x) => x.name === restaurant).interests}
              </div>
            </div>
          </div>

          <div className="uk-card uk-card-default uk-padding-remove"> 
            <div className="uk-padding-remove uk-cover-container uk-card-media-top">
              <Slider images={transportsBase.find((x) => x.name === transport).images} />
            </div>
            <div className="uk-card-body uk-margin-small-top">
              <div className="uk-margin-small">
                <h3>{transportsBase.find((x) => x.name === transport).name}</h3> 
              </div>
              <div className="uk-margin-small">
                <b>Vehicle Type:</b> {transportsBase.find((x) => x.name === transport).vehicle_type}
              </div>
              <div className="uk-margin-small">
                <b>Price:</b> {transportsBase.find((x) => x.name === transport).price}
              </div>
              <div className="uk-margin-small">
                <b>Service Type:</b> {transportsBase.find((x) => x.name === transport).service_type}
              </div>
            </div>
          </div>

          <div className="uk-card uk-card-default uk-padding-remove">
            <div className="uk-padding-remove uk-cover-container uk-card-media-top">
              <Slider images={hotelsBase.find((x) => x.name === hotel).images} />
            </div>
            <div className="uk-card-body uk-margin-small-top">
              <div className="uk-margin-small">
                <h3>{hotelsBase.find((x) => x.name === hotel).name}</h3> 
              </div>
              <div className="uk-margin-small">
                <b>City:</b> {hotelsBase.find((x) => x.name === hotel).city}
              </div>
              <div className="uk-margin-small">
                <b>Price:</b> {hotelsBase.find((x) => x.name === hotel).price}
              </div>
              <div className="uk-margin-small">
                <b>Interests:</b> {hotelsBase.find((x) => x.name === hotel).interests}
              </div>
            </div>
          </div>
      </div>
      
      </div>
      : null
    );
  }
}

export default Day;
