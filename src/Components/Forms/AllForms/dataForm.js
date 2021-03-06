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
        filteredData: [],
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
            let { model, city } = nextProps;
            getServices[model]().then((res) => {
                const { result } = res.data;
                const data = denormalizeData(result);
                const price = data[0].price;
                this.setState({ data: data, price: price });
            });
            if (city && model !== "transports") {
                let { data, filteredData } = this.state;
                const newData = data.filter(item => item.city === city);
                this.setState({ filteredData: newData });
            }
        }
    }

    getPrice = () => {
        const { model } = this.props;
        let { data, price } = this.state;
        const name = document.getElementById(model).value;
        let item = data.filter(item => item.name === name);
        price = item[0].price;
        this.setState({ price: price })
    }

    render() {
        const { data, price, filteredData } = this.state;
        const { getPrice } = this;
        const { model, city } = this.props;
        console.log("Data:", data);
        console.log("Filtered data:", filteredData);

        return (
            <div className="uk-flex-inline uk-width-1-1">
                <div className="uk-width-2-3 uk-text-left uk-margin-bottom">
                    <label className="uk-form-label uk-margin-small-left uk-text-capitalize">{model === "transports" ? "Routes:" : `${model}:`}</label>
                    <div>
                        {model === "transports" ? (
                            <select className="uk-select" name="name" id={model} onChange={getPrice}>
                                {data.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))}
                            </select>
                        ) : (
                                <select className="uk-select" name="name" id={model} onChange={getPrice}>
                                    {data.map((item, index) => (item.city === city ? (
                                        <option key={index}>{item.name}</option>
                                    ) : null
                                    ))}
                                </select>
                            )}

                    </div>
                </div>

                <div className="uk-width-1-3 uk-text-left">
                    <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Price:</label>
                    <input
                        className="uk-input uk-text-right"
                        id={`${model}_price`}
                        type="number"
                        name="price"
                        value={price}
                    />
                </div>
            </div>
        )
    }
}

export default DataForm;