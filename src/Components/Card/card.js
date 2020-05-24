import React from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import "dayjs/locale/es";
dayjs.extend(relativeTime);

const Card = ({
  _id,
  images = [],
  name,
  last_name,
  email,
  role,
  model,
  city,
  description,
  types,
  interests,
  price,
  service_type,
  transport_type,
  client,
  initial_date,
  final_date,
  status,
}) => {
  return (
    <div
      className="uk-card uk-card-small uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-hover"
      uk-grid="true"
    >
      <div className="uk-card-media-left uk-cover-container">
        <Slider images={images} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">
            {name} {last_name}
          </h3>
          <div>
            {(() => {
              switch (model) {
                case "userbase":
                  return (
                    <div>
                      <div>email:{email}</div>
                      <div>role: {role}</div>
                    </div>
                  );
                  break;
                case "clients":
                  return (
                    <div>
                      <div>email:{email}</div>
                      <div>role: {role}</div>
                    </div>
                  );
                case "hotels":
                  return (
                    <div>
                      <div>city:{city}</div>
                      <div>types: {types}</div>
                      <div>interests: {interests}</div>
                      <div>price: {price}</div>
                    </div>
                  );
                  break;
                case "restaurants":
                  return (
                    <div>
                      <div>city:{city}</div>
                      <div>types: {types}</div>
                      <div>interests: {interests}</div>
                      <div>price: {price} </div>
                    </div>
                  );
                  break;
                case "experiences":
                  return (
                    <div>
                      <div>city:{city}</div>
                      <div>types: {types}</div>
                      <div>interests: {interests}</div>
                      <div>price: {price}</div>
                    </div>
                  );
                  break;
                case "transports":
                  return (
                    <div>
                      <div>service type:{service_type}</div>
                      <div>transport type: {transport_type}</div>
                      <div>price: {price}</div>
                    </div>
                  );
                  break;
                case "reservations":
                  return (
                    <div>
                      <div>client:{client}</div>
                      <div>
                        from {initial_date} to {final_date}
                      </div>
                      <div>{final_date - initial_date} days</div>
                      <div>status: {status}</div>
                    </div>
                  );
                  break;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
