import "../less/ContactForm.css";
import { Container, Row, Col } from 'fluid-react'
import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        companyName: '',
        companyAddress: '',
        creditScore: '',
        desiredFunds: '',
        email: '',
        phoneNumber: '',
        options: '',
        sent: false,
        buttonText: 'Send'
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            companyName: this.state.companyName,
            companyAddress: this.state.companyAddress,
            creditScore: this.state.creditScore,
            desiredFunds: this.state.desiredFunds,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber

        }

        axios.post('API_URI', data)
            .then(res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    // resetForm = () => {
    //     this.setState({
    //         name: '',
    //         companyName: '',
    //         companyAddress: '',
    //         creditScore: '',
    //         desiredFunds: '',
    //         email: '',
    //         phoneNumber: '',
    //         options: '',
    //         buttonText: 'Send'
    //     })
    // }

    render() {
        return (
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

                    <label class="message-name" htmlFor="message-name">Your Name</label>
                    <input onChange={e => this.setState({ name: e.target.value })} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name} required />

                    <label class="message" htmlFor="message-input">Your Company Name</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="companyName" class="message-input" type="text" placeholder="Enter Company Name" value={this.state.companyName} required />

                    <label class="message" htmlFor="message-input">Your Company Address</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="companyAddress" class="message-input" type="text" placeholder="Enter Company Address" value={this.state.message} required />

                    <label class="message" htmlFor="message-input">Estimated Credit Score</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="creditScore" class="message-input" type="text" placeholder="Estimated Credit Score" value={this.state.message} required />

                    <label class="message" htmlFor="message-input">Desired Funds</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="desiredFunds" class="message-input" type="text" placeholder="Desired Funding Amount" value={this.state.message} required />

                    <label class="message-email" htmlFor="message-email">Your Email</label>
                    <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} required />

                    <label class="message" htmlFor="message-input">Phone Number</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="phoneNumber" class="message-input" type="phoneNumber" placeholder="Phone Number" value={this.state.message} required />

                    <label class="message" htmlFor="message-input">Would you be interested in Marketing or Web Services?</label>
                    <textarea onChange={e => this.setState({ message: e.target.value })} name="options" class="message-input" type="text" placeholder="Which Service or Both" value={this.state.message} required />

                    <div className="button--container">
                        <button type="submit" className="button button-primary">{this.state.buttonText}</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Contact;