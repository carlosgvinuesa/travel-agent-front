import { deleteUser } from "../../services/userServices";
import { deleteRestaurant } from "../../services/restaurantServices";
import { deleteHotel } from "../../services/hotelServices";
import { deleteClient } from "../../services/clientServices";
import { deleteExperience } from "../../services/experienceServices";
import { deleteTransport } from "../../services/transportServices";
import { deleteReservation } from "../../services/reservationServices";
import EditModal from "../Forms/AllModals/editModal";
import React, { Component } from "react";
import Slider from "../Common/Slider/slider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import CardDetail from "../CardDetail/cardDetail";
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

class DetailModal extends Component {

    deleteItem = () => {
    const { model, itemId, setItemId } = this.props;
    deleteServices[model](itemId);
    setItemId({});
  };

  render() {
    const { model, user, item, itemId,handleChange,handleImagesChange } = this.props;
    
    return (
      <div id="cardDetailModal" uk-modal="true">
        <div className="uk-modal-dialog uk-width-1-2">
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close="true"
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">
              {item !== undefined ? item.name : ""}
              {item !== undefined ? item.last_name : ""}
            </h2>
          </div>
          <div className="uk-modal-body" uk-overflow-auto="true">
            <div>
              <CardDetail user={user} model={model} {...item} item={itemId} />
              <EditModal
                model={model}
                title={model.slice(0, -1)}
                id={itemId}
                {...item}
                data={item}
                handleImagesChange={handleImagesChange}
                handleChange ={handleChange}
              />
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <div>
              <button
                className="uk-button uk-button-default uk-button-small uk-width-small"
                uk-toggle={`target: #${model}-edit`}
                //onClick={() => this.setState({ isEdit: true })}
                type="button"
              >
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
          </div>
        </div>
      </div>
    );
  }
}

export default DetailModal;
