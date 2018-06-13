import React from 'react';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import OnVisible from 'react-on-visible';
import { Button, Form } from 'semantic-ui-react';


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
    },
    submit: {
        marginTop: 30
    }
});


class ContactPage extends React.Component {

    state = {
        _replyto: '', 
        _subject: '', 
        name: '',
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

    render() {
        const { classes } = this.props;
        const { _replyto, _subject, name, visible } = this.state;

        return (
            <div id={this.props.id} > 
                <div className={classes.container} >
                    <h1 className={classes.header} > 
                        Don't be shy! Drop me a line! 
                        </h1>
                    <p className={classes.subHeader} > 
                        Want to work on a project together? Or just want to say hey?<br/>Feel free to reach out!
                    </p>
                    <OnVisible onChange={this.handleVisibility}>
                        <Slide in={visible} direction="left" style={{ transitionDelay: visible? 500 : 0 }} {...(visible ? { timeout: 1000 } : {})} >
                            <Form className={classes.form} action="https://formspree.io/benbrewerbowman.webapp@gmail.com" method="POST">
                                <Form.Input 
                                    className={classes.field}
                                    required
                                    label='Your Email'
                                    type="email"
                                    placeholder='Ex. email-address@some-site.com'
                                    name='_replyto'
                                    value={_replyto}
                                    onChange={this.handleChange}
                                />
                                <Form.Input 
                                    className={classes.field}
                                    required
                                    label='Subject' 
                                    placeholder='Ex. Hey' 
                                    name="_subject"
                                    value={_subject} 
                                    onChange={this.handleChange}
                                />
                                <Form.TextArea 
                                    className={`${classes.field} ${classes.textArea}`}
                                    autoHeight 
                                    required
                                    label='Message'
                                    placeholder="Let me know what's going on!"
                                    name="name"
                                    value={name} 
                                    onChange={this.handleChange}
                                />
                                <Button className={classes.submit} type='submit'>Submit</Button>
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