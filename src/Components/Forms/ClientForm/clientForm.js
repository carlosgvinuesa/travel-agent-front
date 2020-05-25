import React, { Component } from "react";
import { createClient } from "../../../services/clientServices";
import { searchUser } from "../../../services/userServices";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

class ClientForm extends Component {
    state = {
        client: {},
    };

    handleChange = (e) => {
        let { client } = this.state;
        client = { ...client, [e.target.name]: e.target.value };
        this.setState({ client });
    };

    handleImagesChange = (e) => {
        let { client } = this.state;
        client = { ...client, [e.target.name]: e.target.value.split(",") };
        this.setState({ client });
    };

    handleClick = () => {
        let { email } = this.state.client;
        searchUser(`email=${email}`).then((res) => {
            console.log("Client:", res);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { client } = this.state;
        const { history } = this.props;
        createClient(client)
            .then((res) => {
                history.push("/");
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const { client } = this.state;
        return (
            <div className="uk-modal-body">
                <div className="uk-margin" uk-margin="true">
                    <input
                        name="email"
                        className="uk-input uk-form-width-medium"
                        type="text"
                        value={client.email}
                        placeholder="Email address"
                        onChange={this.handleChange}
                    />
                    <button className="uk-button uk-button-default uk-text-capitalize" onClick={this.handleClick}>Import user</button>
                </div>
                <form className="uk-width-2-3" onSubmit={this.handleSubmit}>
                    <legend className="uk-legend">New Client</legend>

                    <InputField
                        name="name"
                        id="Name"
                        value={client.name}
                        placeholder="Client's name"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="last_name"
                        id="Last name"
                        value={client.last_name}
                        placeholder="Client's last name"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="email"
                        id="Email"
                        value={client.email}
                        placeholder="Client's email"
                        handleChange={this.handleChange}
                    />
                    <TextAreaField
                        name="comments"
                        value={client.comments}
                        handleChange={this.handleChange}
                    />
                    <button type="submit" className="uk-button uk-button-primary uk-text-capitalize">
                        Create Customer
                    </button>
                </form>
            </div>
        )
    }
}

export default ClientForm;