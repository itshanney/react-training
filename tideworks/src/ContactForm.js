import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`name:    ${this.state.name}`);
        console.log(`message: ${this.state.message}`);
    }

    render() {
        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name} />
                <label>Message</label>
                <input 
                    type="text" 
                    name="message" 
                    onChange={this.handleChange} 
                    value={this.state.message} />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default ContactForm;