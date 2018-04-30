import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { Button, Form, Message } from 'semantic-ui-react';


const styles = {

    container: {
        padding: '50px 0px'
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
            name: '',
            senderEmail: '', 
            subject: '', 
            messageBody: ''
        }
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
  
    handleSubmit = () => {
        const { name, senderEmail, subject, messageBody } = this.state;

        const data = {
            name: name,
            senderEmail: senderEmail,
            subject: subject,
            messageBody: messageBody
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
        const { name, senderEmail, subject, messageBody } = this.state;

        return (
            <div style={{backgroundColor: 'whiteSmoke'}} id="contact-page"> 
                <div style={styles.container} >
                    <h1 style={styles.header}> Don't be shy! Drop me a line! </h1>
                    <Form style={styles.form} onSubmit={this.handleSubmit} success={false}>
                        <Form.Input 
                            style={styles.field}
                            required 
                            label='Name' 
                            placeholder='Name' 
                            name='name' 
                            value={name} 
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            style={styles.field} 
                            label='Your Email'
                            placeholder='Ex. email-address@some-site.com'
                            name='senderEmail'
                            value={senderEmail}
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            style={styles.field} 
                            required
                            label='Subject' 
                            placeholder='Subject' 
                            name='subject' 
                            value={subject} 
                            onChange={this.handleChange}
                        />
    
                        <Form.TextArea 
                            style={{...styles.field, minHeight: 150}} 
                            autoHeight 
                            required
                            label='Your Message'
                            placeholder='Message' 
                            name='messageBody' value={messageBody} 
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
            </div>
        );
    }
};

export { ContactPage };