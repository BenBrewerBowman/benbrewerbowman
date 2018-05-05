import React from 'react';
import Grey from 'material-ui/colors/grey';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
        ':hover': { border: 'solid #0088FF 2px' }
    }
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
    
    // window.onscroll = () => {
    //     const nav = document.querySelector('#navbar');
    //     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
    // };

    render() {
        const offsetScroll = -30;

        return(
            <div style={styles.navBar}>
                <h3 style={styles.navItem}>ABOUT</h3>
                <Link activeClass="active" to="skills-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem}>SKILLS</h3>
                </Link>
                <Link activeClass="active" to="photos-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={styles.navItem}>TRAVELS</h3>
                </Link>
                <h3 style={styles.navItem}>PORTFOLIO</h3>
                
                <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                    <h3 style={{...styles.navItem, marginRight: 50}}>CONTACT</h3>
                </Link>
            </div>
        );
    }
}

export default NavigationDesktop;
