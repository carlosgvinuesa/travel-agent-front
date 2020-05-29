import React, { Component } from "react";
import { getExperiences } from "../../../services/experienceServices";
import { getRestaurants } from "../../../services/restaurantServices";
import { getHotels } from "../../../services/hotelServices";
import { getTransports } from "../../../services/transportServices";
import { denormalizeData } from "../../../utils/dataUtils";

const getServices = {
    experiences: getExperiences,
    restaurants: getRestaurants,
    hotels: getHotels,
    transports: getTransports,
}

class DataForm extends Component {
    state = {
        data: [],
        price: 0,
    };

    componentDidMount() {
        let { model } = this.props;
        getServices[model]().then((res) => {
            const { result } = res.data;
            const data = denormalizeData(result);
            const price = data[0].price;
            this.setState({ data: data, price: price });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.model !== this.props.model) {
            let { model } = nextProps;
            getServices[model]().then((res) => {
                const { result } = res.data;
                const data = denormalizeData(result);
                const price = data[0].price;
                this.setState({ data: data, price: price });
            });
        }
    }

    getPrice = () => {
        const { model } = this.props;
        console.log("Daily model:", model);
        let { data, price } = this.state;
        console.log("State data:", data);
        console.log("State price:", price);
        const name = document.getElementById(model).value;
        console.log("Value name:", name);
        let item = data.filter(item => item.name === name);
        price = item[0].price;
        this.setState({ price: price })
    }

    render() {
        const { data, price } = this.state;
        const { getPrice } = this;
        const { model, handlePrice } = this.props;

        return (
            <div className="uk-flex-inline uk-width-1-1">
                <div className="uk-width-2-3 uk-text-left uk-margin-bottom">
                    <label className="uk-form-label uk-margin-small-left uk-text-capitalize">{model === "transports" ? "Routes:" : `${model}:`}</label>
                    <div>
                        <select className="uk-select" name="name" id={model} onChange={getPrice}>
                            {data.map((item, index) => (
                                <option key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="uk-width-1-3 uk-text-left">
                    <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Price:</label>
                    <input
                        className="uk-input uk-text-right"
                        type="number"
                        name="price"
                        value={price}
                        onChange={handlePrice}
                    />
                </div>
            </div>
        )
    }
}

export default DataForm;