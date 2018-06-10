import React from 'react';
import axios from 'axios';
import qs from 'qs';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import OnVisible from 'react-on-visible';
import { Button, Form, Message } from 'semantic-ui-react';


const styles = theme => ({

    container: {
        padding: '50px 0px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 36
    },

    subHeader: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    field: {
        width: '90vw',
        maxWidth: 600,
    },

    textArea: {
        minHeight: 100
    },

    centerText: {
        textAlign: 'center'
    }
});


class ContactPage extends React.Component {

    state = {
        name: '',
        senderEmail: '', 
        subject: '', 
        messageBody: '',
        submitSuccess: false,
        submitError: false,
        visible: false
    }

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
        const { classes } = this.props;
        const { name, senderEmail, subject, messageBody, submitSuccess, submitError, visible } = this.state;

        return (
            <div id={this.props.id} > 
                <div className={classes.container} >
                    <h1 className={classes.header} > 
                        Don't be shy! Drop me a line! 
                        </h1>
                    <p className={classes.subHeader} > 
                        Want to work on a project together? Or maybe just want to say hey? Feel free to reach out.
                    </p>
                    <OnVisible onChange={this.handleVisibility}>
                        <Slide in={visible} direction="left" style={{ transitionDelay: visible? 500 : 0 }} {...(visible ? { timeout: 1000 } : {})} >
                            <Form className={classes.form} onSubmit={this.handleSubmit} error={submitError}>
                                <Form.Input 
                                    className={classes.field}
                                    required 
                                    label='Name' 
                                    placeholder='Ex. John Doe' 
                                    name='name' 
                                    value={name} 
                                    onChange={this.handleChange}
                                />
                                <Form.Input 
                                    className={classes.field}
                                    label='Your Email'
                                    placeholder='Ex. email-address@some-site.com'
                                    name='senderEmail'
                                    value={senderEmail}
                                    onChange={this.handleChange}
                                />
                                <Form.Input 
                                    className={classes.field}
                                    required
                                    label='Subject' 
                                    placeholder='Ex. Hey' 
                                    name='subject' 
                                    value={subject} 
                                    onChange={this.handleChange}
                                />
            
                                <Form.TextArea 
                                    className={`${classes.field} ${classes.textArea}`}
                                    autoHeight 
                                    required
                                    label='Message'
                                    placeholder="Let me know what's going on!"
                                    name='messageBody' value={messageBody} 
                                    onChange={this.handleChange}
                                />
                                <Button type='submit'>Submit</Button>
                                <Slide in={submitError} direction="up" mountOnEnter unmountOnExit>
                                    <Message
                                        className={classes.centerText}
                                        error
                                        header='Error sending message'
                                        content={'Sorry for the inconvenience! We have been notified and will take care of this problem promptly!'}
                                    />
                                </Slide>
                                <Snackbar
                                    className={classes.centerText}
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

const ContactPageWithStyles = withStyles(styles) (ContactPage);
export { ContactPageWithStyles as ContactPage };