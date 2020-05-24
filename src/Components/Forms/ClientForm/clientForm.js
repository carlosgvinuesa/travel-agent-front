import React, { Component } from "react";
import { createClient } from "../../../services/clientServices";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

class ClientForm extends Component {
    state = {
        client: {}
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
                <form className="uk-width-2-3" onSubmit={this.handleSubmit}>
                    <legend className="uk-legend">New Client</legend>

                    <div className="uk-margin" uk-margin="true">
                        <div uk-form-custom="target: true">
                            <input className="uk-input uk-form-width-medium" type="text" placeholder="Email address" />
                        </div>
                        <button className="uk-button uk-button-default uk-text-capitalize">Import user</button>
                    </div>
                    
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