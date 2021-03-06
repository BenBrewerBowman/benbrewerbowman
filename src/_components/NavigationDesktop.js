import React from 'react';
import { Link, Events, animateScroll } from 'react-scroll'
import LogoImg from '../_img/logo.svg';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    navBar: {
        position: 'fixed', 
        top: 0, 
        float: 'right', 
        width: '100%', 
        height: 60, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        zIndex: 1000, 
        letterSpacing: 1.5,
        backgroundColor: '#1DE9B6'
    },
    navItem: {
        marginRight: 40,
        color: 'black', 
        '&:hover': {
            borderBottom: '3px solid black',
            cursor: 'pointer'
        }
    },
    logoContainer: {
        marginLeft: 60,
        flexGrow: 1
    },
    logo: {
        height: 45,
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

class NavigationDesktop extends React.Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    
    scrollToTop() {
        const scroll = animateScroll;
        scroll.scrollToTop();
    }

    render() {
        const { classes } = this.props;
        const offsetScroll = -60;
        const duration = 800;

        return(
            <div className={classes.navBar}>
                <div className={classes.logoContainer}>
                    <img className={classes.logo} src={LogoImg} alt="Favicon Logo" onClick={this.scrollToTop} />
                </div>
                <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={offsetScroll} duration={duration} >
                    <h3 className={classes.navItem} >ABOUT ME</h3>
                </Link>
                <Link activeClass="active" to="skills-page" spy={true} smooth={true} offset={offsetScroll} duration={duration} >
                    <h3 className={classes.navItem} >SKILLS</h3>
                </Link>
                <Link activeClass="active" to="interests-page" spy={true} smooth={true} offset={offsetScroll} duration={duration} >
                    <h3 className={classes.navItem} >INTERESTS</h3>
                </Link>

                <Link activeClass="active" to="photos-page" spy={true} smooth={true} offset={offsetScroll} duration={duration} >
                    <h3 className={classes.navItem} >GALLERY</h3>
                </Link>            
                <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={offsetScroll} duration={duration} >
                    <h3 className={classes.navItem} >CONTACT</h3>
                </Link>
            </div>
        );
    }
}


const NavigationDesktopWithStyles = withStyles(styles) (NavigationDesktop);
export { NavigationDesktopWithStyles as NavigationDesktop };