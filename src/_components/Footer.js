import React from 'react';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';   
import { linkedin } from 'react-icons-kit/icomoon/linkedin'; 
import { mail4 } from 'react-icons-kit/icomoon/mail4';  
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    footerContainer: {
        backgroundColor: '#1DE9B6', 
        height: 150, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    socialIconsContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    socialIcon: {
        margin: "0px 30px", 
        color: 'black',
        '&:hover': {
            color: 'black',
        }
    },

    copyright: {
        textAlign: 'center', 
        marginTop: 25
    }
});


const Footer = (props) => {

    const { classes } = props;
    const iconSize = 40;
    const getCurrentYear = () => (new Date()).getFullYear().toString();

    return (
        <div className={classes.footerContainer} >
            <div className={classes.socialIconsContainer} >
                <IconButton className={classes.socialIcon} href="https://github.com/BenBrewerBowman" >
                    <Icon size={iconSize} icon={github} />
                </IconButton>
                <IconButton className={classes.socialIcon} href="https://www.linkedin.com/in/ben-brewer" >
                    <Icon size={iconSize} icon={linkedin} />
                </IconButton>
                <IconButton className={classes.socialIcon} href="mailto:benbrewerbowman.webapp@gmail.com" >
                    <Icon size={iconSize} icon={mail4} />
                </IconButton>
            </div>
            <div className={classes.copyright} > Ben Brewer-Bowman ©{getCurrentYear()} </div>
        </div>
    );
};

const FooterWithStyles = withStyles(styles) (Footer);
export { FooterWithStyles as Footer };