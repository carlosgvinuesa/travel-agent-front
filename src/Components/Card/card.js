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
  title,
  description,
  price,
  capacity,
  createdAt,
  owner,
  userId,
  isDemo = false,
}) => {
  return (
    <div
      className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid="true"
    >
      <div className="uk-card-media-left uk-cover-container">
        <Slider images={images} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Media Left</h3>
          <div>Name: {name} {last_name}</div>
          <div>email: {email}</div>
          <div>role: {role}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
