import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
dayjs.extend(relativeTime);

class CardDetail extends Component {
  removeItem = () => { };
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
                          <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                            {description === undefined ? null : (
                              <div className="uk-margin-left uk-margin">
                                <b>Description:</b> {description}
                              </div>
                            )}
                            {price < 1 ? null : (
                              <div className="uk-margin-left uk-margin-small">
                                <b>Price:</b> {price}
                              </div>
                            )}
                            {city === undefined ? null : (
                              <div className="uk-margin-left uk-margin-small">
                                <b>City:</b> {city}
                              </div>
                            )}
                            {types.length < 1 ? null : (
                              <div className="uk-margin-left uk-margin-small">
                                <b>Types:</b> {types}
                              </div>
                            )}
                            {interests.length < 1 ? null : (
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
                            {phone_numbers.length < 1 ? null : (
                              <div className="uk-margin-left uk-margin-small">
                                <b>Phone:</b> {phone_numbers}
                              </div>
                            )}
                            {contacts.length < 1 ? null : (
                              <div className="uk-margin-left uk-margin-small">
                                <b>Contacts:</b> {contacts}
                              </div>
                            )}
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
                      default:
                        return <div></div>;
                        break;
                    }
                  })()}
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
                  <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Warning!</h2>
                    <p>
                      Are you sure you want to delete? This action is
                      irreversible!
                  </p>
                    <p class="uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close"
                        type="button"
                      >
                        CANCEL
                    </button>
                      <button class="uk-button uk-button-danger" type="button">
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
