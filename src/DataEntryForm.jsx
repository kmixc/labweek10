import React, { Component } from 'react'

export default class DataEntryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            acceptedTOS: false,
            formSubmitted: false
        }

        this.provices = [
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Nova Scotia",
            "Ontario",
            "Prince Edward Island",
            "Quebec",
            "Saskatchewan"
        ]
    }

    formChange = e => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    termsAndConditions = e => {
        this.setState({ ...this.state, acceptedTOS: !this.state.acceptedTOS })
    }

    submitForm = e => {
        e.preventDefault()
        if (this.state.acceptedTOS) {
            this.setState({ ...this.state, formSubmitted: true })
        } else {
            alert("You must accept terms and conditions.")
        }
    }

    render() {
        let form =
            <form onSubmit={this.submitForm}>
                <h1>Data Entry Form</h1>
                <div className="form-group">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.formChange} type="email" placeholder="Email" name="email" id="email" />
                    </div>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input onChange={this.formChange} type="text" placeholder="Full Name" name="fullName" id="fullName" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <label htmlFor="address">Address</label>
                        <input onChange={this.formChange} type="text" placeholder="Address" name="address1" id="address1" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <label htmlFor="address2">Address 2</label>
                        <input onChange={this.formChange} type="text" placeholder="Address 2" name="address2" id="address2" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input">
                        <label htmlFor="city">City</label>
                        <input onChange={this.formChange} type="text" placeholder="City" name="city" id="city" />
                    </div>
                    <div className="input">
                        <label htmlFor="province">Province</label>
                        <select onChange={this.formChange} name="province" id="province">
                            <option value="">Choose Province...</option>
                            {
                                this.provices.map(p => <option value={p} key={p}>{p}</option>)
                            }
                        </select>
                    </div>
                    <div className="input">
                        <label htmlFor="postal_code">Postal Code</label>
                        <input onChange={this.formChange} type="text" placeholder="Postal Code" name="postalCode" id="postalCode" />
                    </div>
                </div>

                <div className="checkbox">
                    <input onChange={this.termsAndConditions} name="termsAndConditions" type="checkbox" value="" id="conditions" defaultChecked={this.state.acceptedTOS} />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Agree Terms &amp; Condition?
                    </label>
                </div>

                <input type="submit" className="submit" value="Submit" />

            </form>

        let submittedData = <div>
            <b className="sumission">Email: </b> {this.state.email} <br />
            <b className="sumission">Full Name: </b> {this.state.fullName} <br />
            <b className="sumission">Address: </b> {this.state.address1} {this.state.address2} <br />
            <b className="sumission">City: </b> {this.state.city} <br />
            <b className="sumission">Province: </b> {this.state.province} <br />
            <b className="sumission">Postal Code: </b> {this.state.postalCode} <br />
        </div>

        return (
            <div>
                {this.state.formSubmitted ? submittedData : form}
            </div>
        )
    }
}