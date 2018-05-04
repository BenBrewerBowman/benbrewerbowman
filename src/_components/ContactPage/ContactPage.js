import React from 'react';
import axios from 'axios';
import qs from 'qs';
import Slide from 'material-ui/transitions/Slide';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import OnVisible from 'react-on-visible';

import { Button, Form, Message } from 'semantic-ui-react';


const styles = {

    container: {
        padding: '50px 0px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 36
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    field: {
        width: '90vw',
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
            messageBody: '',
            submitSuccess: false,
            submitError: false,
            visible: false
        }
    };

    handleVisibility = () => {
        if (!this.state.visible) {
            this.setState({
                visible: true
            });
        }
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value, submitError: false });
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
            .then(response => {
                console.log("set the state");
                this.setState({
                    name: '',
                    senderEmail: '', 
                    subject: '', 
                    messageBody: '',
                    submitSuccess: true,
                    submitError: false
                });
            })
            .catch(error => {
                this.setState({
                    submitError: true
                });
            });
    }

    handleSnackbarClose = (event, reason) => {
        console.log("click entered")
        if (reason === 'clickaway') {
            return;
        }
        console.log('submitSuccess to false')
        this.setState({ submitSuccess: false });
    };


    render() {
        const { name, senderEmail, subject, messageBody, submitSuccess, submitError, visible } = this.state;

        return (
            <div style={{backgroundColor: 'whiteSmoke'}} id={this.props.id} > 
                <div style={styles.container} >
                    <h1 style={styles.header}> Don't be shy! Drop me a line! </h1>
                    <OnVisible onChange={this.handleVisibility}>
                        <Slide in={visible} direction="left" style={{ transitionDelay: visible? 500 : 0 }} {...(visible ? { timeout: 1000 } : {})} >
                            <Form style={styles.form} onSubmit={this.handleSubmit} error={submitError}>
                                <Form.Input 
                                    style={styles.field}
                                    required 
                                    label='Name' 
                                    placeholder='Ex. John Doe' 
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
                                    label='Message'
                                    placeholder='Your Message' 
                                    name='messageBody' value={messageBody} 
                                    onChange={this.handleChange}
                                />
                                <Button type='submit'>Submit</Button>
                                <Slide in={submitError} direction="up" mountOnEnter unmountOnExit>
                                    <Message
                                        style={{textAlign: 'center'}}
                                        error
                                        header='Error sending message'
                                        content={'Sorry for the inconvenience! We have been notified and will take care of this problem promptly!'}
                                    />
                                </Slide>
                                <Snackbar
                                    style={{textAlign: 'center'}}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
                                    open={submitSuccess}
                                    autoHideDuration={6000}
                                    onClose={this.handleSnackbarClose}
                                    SnackbarContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Thanks for reaching out!</span>}
                                    action={[
                                        <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={this.handleSnackbarClose}
                                        >
                                        <CloseIcon />
                                        </IconButton>,
                                    ]}
                                />
                            </Form>
                        </Slide>
                    </OnVisible>
                </div>
            </div>
        );
    }
};

export { ContactPage };