import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { Button, Form, Message } from 'semantic-ui-react';


const styles = {

    container: {
        margin: '50px 0px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 50
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    field: {
        width: '80vw',
        maxWidth: 600
    },
};


class ContactPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = { 
            firstName: '',
            lastName: '', 
            email: '', 
            message: ''
        }
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
  
    handleSubmit = () => {

        const { firstName, lastName, email, message } = this.state;

        const data = {
            firstName: firstName,
            lastName: lastName,
            fromEmailAddress: email,
            messageBody: message
        };

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: '/api/contact',
        };

        axios(options)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    render() {
        const { firstName, lastName, email, message } = this.state;

        return (
            <div style={styles.container} >
                <h1 style={styles.header}> Don't be shy! Drop me a line! </h1>
                <Form style={styles.form} onSubmit={this.handleSubmit} success={false}>
                    <Form.Input 
                        style={styles.field} 
                        label='First Name' 
                        placeholder='First' 
                        name='firstName' 
                        value={firstName} 
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        style={styles.field} 
                        label='Last Name' 
                        placeholder='Last' 
                        name='lastName' 
                        value={lastName} 
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        style={styles.field} 
                        label='Your Email Address' 
                        placeholder='Ex. email-address@some-site.com' 
                        name='email' 
                        value={email} 
                        onChange={this.handleChange}
                    />
                    <Form.TextArea 
                        style={styles.field} 
                        autoHeight 
                        required
                        label='Your Message'
                        placeholder='Try adding multiple lines' 
                        name='message' value={message} 
                        onChange={this.handleChange}
                    />
                    <Message
                        success
                        header='Your Message Was Successfully Sent!'
                        content="Thanks for reaching out!"
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
};

export { ContactPage };