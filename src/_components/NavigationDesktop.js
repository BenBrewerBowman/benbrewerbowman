import React from 'react';
import { Link, Events } from 'react-scroll'
import LogoImg from '../_img/logo.svg';


const styles = {
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
        margin: 20,
        color: 'black', 
        '&:hover': { color: 'red' }
    },

    logoContainer: {
        marginLeft: 60,
        height: 45,
        flexGrow: 1
    },
};

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
    
    handleHover() {

    }

    render() {
        const offsetScroll = -60;

        return(
            <div style={styles.navBar}>
                <div style={styles.logoContainer}>
                    <img src={LogoImg} height={styles.logoContainer.height} />
                </div>
                <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem}>ABOUT ME</h3>
                </Link>
                <Link activeClass="active" to="skills-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem} onMouseOver={this.handleHover}>SKILLS</h3>
                </Link>
                <Link activeClass="active" to="interests-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem}>INTERESTS</h3>
                </Link>

                <Link activeClass="active" to="photos-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem}>GALLERY</h3>
                </Link>            
                <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={{...styles.navItem, marginRight: 50}}>CONTACT</h3>
                </Link>
            </div>
        );
    }
}

export { NavigationDesktop };
